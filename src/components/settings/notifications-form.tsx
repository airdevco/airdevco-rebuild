import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function NotificationsForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Preferences</CardTitle>
        <CardDescription>
          Manage how and when you receive notifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Notification settings will be available soon. You'll be able to control email notifications,
          in-app notifications, and notification frequency.
        </p>
      </CardContent>
    </Card>
  )
}