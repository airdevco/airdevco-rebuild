import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LegalEditor } from "@/components/legal/legal-editor"

export function PrivacyPolicyForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Privacy Policy</CardTitle>
        <CardDescription>
          Last updated: January 1, 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LegalEditor
          title="Privacy Policy Content"
          description="Edit your privacy policy content. This will be displayed to users."
          initialContent={`Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.

<h3>Information We Collect</h3>
We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support.

<h3>How We Use Your Information</h3>
We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.`}
          onSave={(content) => {
            // TODO: Save to backend
            console.log("Saving privacy policy:", content);
          }}
        />
      </CardContent>
    </Card>
  )
}