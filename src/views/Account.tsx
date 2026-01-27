import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarLayout } from "@/components/layouts";

export default function Account() {
  const { user } = useAuth();
  
  return (
    <SidebarLayout title="Account">
      <div className="container mx-auto py-8 px-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Account Overview</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Your account details and preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${user?.email}`} alt="Profile" />
              <AvatarFallback>{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">{user?.email}</h3>
              <p className="text-sm text-muted-foreground">Member since {new Date(user?.created_at || '').toLocaleDateString()}</p>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-1">Email Address</h4>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-1">User ID</h4>
              <p className="text-sm text-muted-foreground font-mono">{user?.id}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-1">Account Status</h4>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => window.location.href = "/settings/profile"}>
              Edit Profile
            </Button>
            <Button variant="outline" onClick={() => window.location.href = "/settings/login"}>
              Security Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </SidebarLayout>
  );
}