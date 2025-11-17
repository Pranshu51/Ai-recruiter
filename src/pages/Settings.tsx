import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Settings</h2>
        <p className="text-muted-foreground">
          Manage your application settings and preferences
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Email Integration</CardTitle>
            <CardDescription>
              Connect your email account to automatically fetch resumes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Gmail Integration</Label>
                <p className="text-sm text-muted-foreground">
                  Monitor Gmail for new resume attachments
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="email">Connected Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="recruiter@company.com"
                disabled
                value="recruiter@company.com"
              />
            </div>
            <Button variant="outline">Reconnect Gmail</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Model Settings</CardTitle>
            <CardDescription>
              Configure AI models for resume parsing and scoring
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="model">AI Model Provider</Label>
              <Input id="model" placeholder="Groq AI" disabled value="Groq AI" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="threshold">Score Threshold</Label>
              <Input
                id="threshold"
                type="number"
                placeholder="75"
                defaultValue="75"
                min="0"
                max="100"
              />
              <p className="text-xs text-muted-foreground">
                Candidates below this score will be automatically rejected
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Job Requirements</CardTitle>
            <CardDescription>
              Define the requirements for candidate evaluation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                placeholder="Senior Full Stack Developer"
                defaultValue="Senior Full Stack Developer"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Required Skills (comma separated)</Label>
              <Input
                id="skills"
                placeholder="React, Node.js, TypeScript, AWS"
                defaultValue="React, Node.js, TypeScript, AWS"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Minimum Experience (years)</Label>
              <Input
                id="experience"
                type="number"
                placeholder="5"
                defaultValue="5"
                min="0"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Configure how you receive updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email alerts for new candidates
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Interview Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified before scheduled interviews
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Daily Summary</Label>
                <p className="text-sm text-muted-foreground">
                  Receive daily recruitment activity summary
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
