import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ApplicationTable } from "@/components/applications/application-table"
import { Search, Filter, SlidersHorizontal } from "lucide-react"

export default function ApplicationsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Applications</h2>
        <Button>Export Data</Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search applications..." className="pl-8" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Sort
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Applications</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="review">In Review</TabsTrigger>
          <TabsTrigger value="qualified">Qualified</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Applications</CardTitle>
              <CardDescription>View and manage all job applications</CardDescription>
            </CardHeader>
            <CardContent>
              <ApplicationTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>New Applications</CardTitle>
              <CardDescription>Applications that have not been reviewed yet</CardDescription>
            </CardHeader>
            <CardContent>
              <ApplicationTable status="New" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="review">
          <Card>
            <CardHeader>
              <CardTitle>In Review</CardTitle>
              <CardDescription>Applications currently being reviewed</CardDescription>
            </CardHeader>
            <CardContent>
              <ApplicationTable status="Review" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="qualified">
          <Card>
            <CardHeader>
              <CardTitle>Qualified Candidates</CardTitle>
              <CardDescription>Candidates who have passed initial screening</CardDescription>
            </CardHeader>
            <CardContent>
              <ApplicationTable status="Qualified" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rejected">
          <Card>
            <CardHeader>
              <CardTitle>Rejected Applications</CardTitle>
              <CardDescription>Applications that did not meet requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <ApplicationTable status="Rejected" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

