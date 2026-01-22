import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/integrations/supabase/client"
import { SettingsSubStep } from "@/components/settings"
import { useAuth } from "@/contexts/AuthContext"

const passwordFormSchema = z.object({
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

const emailChangeSchema = z.object({
  newEmail: z.string().email("Please enter a valid email address"),
  confirmEmail: z.string().email("Please enter a valid email address"),
}).refine((data) => data.newEmail === data.confirmEmail, {
  message: "Email addresses do not match",
  path: ["confirmEmail"],
})

type PasswordFormValues = z.infer<typeof passwordFormSchema>
type EmailChangeValues = z.infer<typeof emailChangeSchema>
type SecuritySubStep = 'main' | 'change-password' | 'change-email'

export function SecurityForm() {
  const { user } = useAuth()
  const [subStep, setSubStep] = useState<SecuritySubStep>('main')
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false)
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false)
  
  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  })
  
  const emailForm = useForm<EmailChangeValues>({
    resolver: zodResolver(emailChangeSchema),
    defaultValues: {
      newEmail: "",
      confirmEmail: "",
    },
  })


  async function onPasswordSubmit(data: PasswordFormValues) {
    setIsUpdatingPassword(true)
    
    try {
      const { error } = await supabase.auth.updateUser({
        password: data.newPassword
      })
      
      if (error) {
        toast.error(error.message)
      } else {
        toast.success("Password updated successfully")
        passwordForm.reset()
        setSubStep('main')
      }
    } catch (error) {
      toast.error("An unexpected error occurred")
    } finally {
      setIsUpdatingPassword(false)
    }
  }
  
  async function onEmailSubmit(data: EmailChangeValues) {
    setIsUpdatingEmail(true)
    
    try {
      const { error } = await supabase.auth.updateUser({
        email: data.newEmail
      })
      
      if (error) {
        toast.error(error.message)
      } else {
        toast.success("Email update initiated. Please check your new email for the confirmation link.")
        emailForm.reset()
        setSubStep('main')
      }
    } catch (error) {
      toast.error("An unexpected error occurred")
    } finally {
      setIsUpdatingEmail(false)
    }
  }


  return (
    <div className="space-y-6">
      {subStep === 'main' && (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Account Email</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">Current Email</p>
                  <p className="text-sm text-muted-foreground">{user?.email || "Loading..."}</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setSubStep('change-email')}>
                  Change email
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Password</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" onClick={() => setSubStep('change-password')}>
                Change password
              </Button>
            </CardContent>
          </Card>
        </>
      )}
      
      {subStep === 'change-password' && (
        <Card>
          <CardContent className="pt-6">
            <SettingsSubStep 
              title="Change password" 
              onBack={() => {
                setSubStep('main')
                passwordForm.reset()
              }}
            >
              <Form {...passwordForm}>
                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4 max-w-md">
                  <FormField
                    control={passwordForm.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New password</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="Enter new password"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Must be at least 6 characters long
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={passwordForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm new password</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="Confirm new password"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      type="submit"
                      size="sm" 
                      disabled={isUpdatingPassword}
                    >
                      {isUpdatingPassword ? "Updating..." : "Update password"}
                    </Button>
                    <Button 
                      type="button"
                      variant="outline" 
                      size="sm" 
                      onClick={() => {
                        setSubStep('main')
                        passwordForm.reset()
                      }}
                      disabled={isUpdatingPassword}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </SettingsSubStep>
          </CardContent>
        </Card>
      )}
      
      {subStep === 'change-email' && (
        <Card>
          <CardContent className="pt-6">
            <SettingsSubStep 
              title="Change email address" 
              onBack={() => {
                setSubStep('main')
                emailForm.reset()
              }}
            >
              <Form {...emailForm}>
                <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-4 max-w-md">
                  <FormItem>
                    <FormLabel>Current email</FormLabel>
                    <FormControl>
                      <Input type="email" value={user?.email || ""} disabled />
                    </FormControl>
                  </FormItem>
                  
                  <FormField
                    control={emailForm.control}
                    name="newEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Enter new email address"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={emailForm.control}
                    name="confirmEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm new email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Confirm new email address"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      type="submit"
                      size="sm" 
                      disabled={isUpdatingEmail}
                    >
                      {isUpdatingEmail ? "Updating..." : "Update email"}
                    </Button>
                    <Button 
                      type="button"
                      variant="outline" 
                      size="sm" 
                      onClick={() => {
                        setSubStep('main')
                        emailForm.reset()
                      }}
                      disabled={isUpdatingEmail}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </SettingsSubStep>
          </CardContent>
        </Card>
      )}
    </div>
  )
}