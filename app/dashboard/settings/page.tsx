"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Save, Lock, FileText, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)

    toast({
      title: "Settings saved",
      description: "Your settings have been updated successfully.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your application settings</p>
        </div>
        <Button onClick={handleSave} disabled={isLoading} className="w-full md:w-auto">
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure basic application settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="TechGlobe Inc." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="primary-email">Primary Contact Email</Label>
                <Input id="primary-email" type="email" defaultValue="hr@techglobe.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Company Website</Label>
                <Input id="website" defaultValue="https://techglobe.com" />
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Date & Time</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Default Timezone</Label>
                    <Select defaultValue="america/los_angeles">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america/los_angeles">Pacific Time (UTC-8)</SelectItem>
                        <SelectItem value="america/new_york">Eastern Time (UTC-5)</SelectItem>
                        <SelectItem value="america/chicago">Central Time (UTC-6)</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="europe/london">London (UTC+0)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue="mm/dd/yyyy">
                      <SelectTrigger id="date-format">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="yyyy/mm/dd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time-format">Time Format</Label>
                    <Select defaultValue="12h">
                      <SelectTrigger id="time-format">
                        <SelectValue placeholder="Select time format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12h">12 Hour (AM/PM)</SelectItem>
                        <SelectItem value="24h">24 Hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="auto-timezone" />
                    <Label htmlFor="auto-timezone">Auto-detect timezone from browser</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Language</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Default Language</Label>
                    <Select defaultValue="en-us">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en-us">English (US)</SelectItem>
                        <SelectItem value="en-gb">English (UK)</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interface Settings</CardTitle>
              <CardDescription>Configure how the application interface behaves</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="auto-save" defaultChecked />
                  <Label htmlFor="auto-save">Auto-save draft job postings</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="animations" defaultChecked />
                  <Label htmlFor="animations">Enable animations</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="confirm-actions" defaultChecked />
                  <Label htmlFor="confirm-actions">Confirm before irreversible actions</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="default-view">Default Dashboard View</Label>
                  <Select defaultValue="overview">
                    <SelectTrigger id="default-view">
                      <SelectValue placeholder="Select default view" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="overview">Overview</SelectItem>
                      <SelectItem value="applications">Applications</SelectItem>
                      <SelectItem value="jobs">Jobs</SelectItem>
                      <SelectItem value="candidates">Candidates</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="items-per-page">Items Per Page</Label>
                  <Select defaultValue="10">
                    <SelectTrigger id="items-per-page">
                      <SelectValue placeholder="Select number of items" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage security preferences for your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Session Settings</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="session-timeout">Session Timeout</Label>
                    <Select defaultValue="60">
                      <SelectTrigger id="session-timeout">
                        <SelectValue placeholder="Select timeout period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                        <SelectItem value="240">4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">Automatically log out after period of inactivity</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="remember-devices" defaultChecked />
                    <Label htmlFor="remember-devices">Remember devices</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Authentication</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-muted">
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium">Two-Factor Authentication (2FA)</h4>
                        <p className="text-sm text-muted-foreground">Require 2FA for all team members</p>
                      </div>
                    </div>
                    <Switch id="require-2fa" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-muted">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email Authentication</h4>
                        <p className="text-sm text-muted-foreground">Verify new devices via email</p>
                      </div>
                    </div>
                    <Switch id="email-auth" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Password Policy</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password-expiry">Password Expiry</Label>
                    <Select defaultValue="90">
                      <SelectTrigger id="password-expiry">
                        <SelectValue placeholder="Select expiry period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="min-length">Minimum Password Length</Label>
                    <Select defaultValue="8">
                      <SelectTrigger id="min-length">
                        <SelectValue placeholder="Select minimum length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">8 characters</SelectItem>
                        <SelectItem value="10">10 characters</SelectItem>
                        <SelectItem value="12">12 characters</SelectItem>
                        <SelectItem value="16">16 characters</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="require-uppercase" defaultChecked />
                    <Label htmlFor="require-uppercase">Require uppercase letters</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="require-numbers" defaultChecked />
                    <Label htmlFor="require-numbers">Require numbers</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="require-special" defaultChecked />
                    <Label htmlFor="require-special">Require special characters</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Login History</h3>
                <Button variant="outline">View Login History</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Configure which email notifications you receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Application Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="new-applications" className="font-medium">
                        New Applications
                      </Label>
                      <p className="text-sm text-muted-foreground">Receive notifications for new job applications</p>
                    </div>
                    <Switch id="new-applications" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="application-status" className="font-medium">
                        Application Status Changes
                      </Label>
                      <p className="text-sm text-muted-foreground">Notifications when application status changes</p>
                    </div>
                    <Switch id="application-status" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="application-summary" className="font-medium">
                        Daily Application Summary
                      </Label>
                      <p className="text-sm text-muted-foreground">Daily summary of application activities</p>
                    </div>
                    <Switch id="application-summary" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Job Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="job-expiring" className="font-medium">
                        Expiring Jobs
                      </Label>
                      <p className="text-sm text-muted-foreground">Notifications for jobs about to expire</p>
                    </div>
                    <Switch id="job-expiring" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="job-activity" className="font-medium">
                        Job Activity
                      </Label>
                      <p className="text-sm text-muted-foreground">Updates on views and application trends</p>
                    </div>
                    <Switch id="job-activity" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Team Collaboration</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="interview-scheduled" className="font-medium">
                        Interview Schedules
                      </Label>
                      <p className="text-sm text-muted-foreground">Notifications when interviews are scheduled</p>
                    </div>
                    <Switch id="interview-scheduled" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="feedback-added" className="font-medium">
                        Feedback Added
                      </Label>
                      <p className="text-sm text-muted-foreground">When team members add candidate feedback</p>
                    </div>
                    <Switch id="feedback-added" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="mentions" className="font-medium">
                        @Mentions
                      </Label>
                      <p className="text-sm text-muted-foreground">When you're mentioned in notes or comments</p>
                    </div>
                    <Switch id="mentions" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Email Frequency</CardTitle>
              <CardDescription>Configure how often you receive email notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email-frequency">Email Digest Frequency</Label>
                <Select defaultValue="daily">
                  <SelectTrigger id="email-frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="real-time">Real-time (As they happen)</SelectItem>
                    <SelectItem value="hourly">Hourly Digest</SelectItem>
                    <SelectItem value="daily">Daily Digest</SelectItem>
                    <SelectItem value="weekly">Weekly Digest</SelectItem>
                    <SelectItem value="none">Don't send</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="digest-time">Digest Delivery Time</Label>
                <Select defaultValue="9am">
                  <SelectTrigger id="digest-time">
                    <SelectValue placeholder="Select delivery time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9am">9:00 AM</SelectItem>
                    <SelectItem value="12pm">12:00 PM</SelectItem>
                    <SelectItem value="3pm">3:00 PM</SelectItem>
                    <SelectItem value="6pm">6:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="weekend-emails" />
                <Label htmlFor="weekend-emails">Receive weekend emails</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>Manage API keys for integration with external services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">API Documentation</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Read our comprehensive API documentation to learn how to integrate with our platform.
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-1">
                      View Documentation
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Your API Keys</h3>
                <div className="space-y-4">
                  <div className="border rounded-md p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="font-medium">Production API Key</h4>
                        <div className="mt-1 flex items-center gap-2">
                          <Input value="••••••••••••••••••••••••••••••" readOnly className="font-mono" />
                          <Button variant="outline" size="sm">
                            Copy
                          </Button>
                          <Button variant="outline" size="sm">
                            Show
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Created on May 1, 2023. Last used 2 days ago.
                        </p>
                      </div>
                      <Button variant="destructive" size="sm" className="shrink-0">
                        Revoke
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-md p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="font-medium">Development API Key</h4>
                        <div className="mt-1 flex items-center gap-2">
                          <Input value="••••••••••••••••••••••••••••••" readOnly className="font-mono" />
                          <Button variant="outline" size="sm">
                            Copy
                          </Button>
                          <Button variant="outline" size="sm">
                            Show
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Created on May 15, 2023. Last used 5 hours ago.
                        </p>
                      </div>
                      <Button variant="destructive" size="sm" className="shrink-0">
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>

                <Button className="mt-4">Generate New API Key</Button>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Webhooks</h3>
                <div className="space-y-4">
                  <div className="border rounded-md p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="font-medium">Application Webhook</h4>
                        <p className="text-sm text-muted-foreground">https://example.com/webhooks/applications</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">Active</Badge>
                          <Badge variant="outline">New Applications</Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="shrink-0">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm" className="shrink-0">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="mt-4">Add Webhook</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integration Logs</CardTitle>
              <CardDescription>View API usage and activity logs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="px-4 py-3 border-b flex justify-between items-center bg-muted/50">
                  <h4 className="font-medium">Recent API Activity</h4>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Activity</SelectItem>
                      <SelectItem value="success">Successful Requests</SelectItem>
                      <SelectItem value="error">Error Responses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4">
                  <div className="text-center py-6 text-muted-foreground">No recent API activity to display</div>
                </div>
              </div>

              <Button variant="outline" className="mt-4 w-full">
                View Full Activity Log
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

