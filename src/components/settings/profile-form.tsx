import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import { useAuth } from "@/contexts/AuthContext"

const profileFormSchema = z.object({
  firstName: z.string().max(255, "First name must be less than 255 characters"),
  lastName: z.string().max(255, "Last name must be less than 255 characters"),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileForm() {
  const { user, refreshProfile } = useAuth()
  const [isUpdating, setIsUpdating] = useState(false)
  const [isLoadingProfile, setIsLoadingProfile] = useState(true)
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })
  
  useEffect(() => {
    async function fetchProfile() {
      if (!user?.id) {
        setIsLoadingProfile(false)
        return
      }
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('first_name, last_name')
          .eq('id', user.id)
          .single()
        
        if (error) {
          console.error('Error fetching profile:', error)
          form.reset({
            firstName: user?.user_metadata?.first_name || "",
            lastName: user?.user_metadata?.last_name || "",
          })
        } else if (data) {
          form.reset({
            firstName: data.first_name || user?.user_metadata?.first_name || "",
            lastName: data.last_name || user?.user_metadata?.last_name || "",
          })
        }
      } catch (error) {
        console.error('Unexpected error fetching profile:', error)
        form.reset({
          firstName: user?.user_metadata?.first_name || "",
          lastName: user?.user_metadata?.last_name || "",
        })
      } finally {
        setIsLoadingProfile(false)
      }
    }
    
    fetchProfile()
  }, [user, form])
  
  const getInitials = () => {
    const firstName = form.watch("firstName")
    const lastName = form.watch("lastName")
    
    if (firstName && lastName) {
      return `${firstName[0]}${lastName[0]}`.toUpperCase()
    } else if (firstName) {
      return firstName.slice(0, 2).toUpperCase()
    } else if (lastName) {
      return lastName.slice(0, 2).toUpperCase()
    }
    return user?.email?.[0].toUpperCase() || "U"
  }
  
  async function onSubmit(data: ProfileFormValues) {
    setIsUpdating(true)
    
    try {
      if (user?.id) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            first_name: data.firstName,
            last_name: data.lastName,
          })
          .eq('id', user.id)
        
        if (profileError) {
          console.error('Error updating profile:', profileError)
          toast.error(`Failed to update profile: ${profileError.message}`)
          setIsUpdating(false)
          return
        }
      }
      
      const { error: authError } = await supabase.auth.updateUser({
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
        }
      })
      
      if (authError) {
        toast.error(authError.message)
      } else {
        // Refresh the profile in AuthContext to update the sidebar immediately
        await refreshProfile()
        toast.success("Profile updated successfully")
      }
    } catch (error) {
      toast.error("An unexpected error occurred")
    } finally {
      setIsUpdating(false)
    }
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Photo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user?.user_metadata?.avatar_url} />
                <AvatarFallback className="text-lg">{getInitials()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" type="button">
                  Change photo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  type="button"
                  className="text-destructive border-destructive hover:bg-destructive/10"
                >
                  Remove photo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Name</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoadingProfile ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <div className="mt-6">
                  <Skeleton className="h-9 w-24" />
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Matthew"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Neary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-6">
                  <Button 
                    type="submit" 
                    size="sm"
                    disabled={isUpdating || !form.formState.isDirty}
                  >
                    {isUpdating ? "Saving..." : "Save changes"}
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </form>
    </Form>
  )
}