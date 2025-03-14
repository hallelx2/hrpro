import { Suspense } from "react"
import { ApplicationsList } from "@/components/candidate/applications-list"
import { ApplicationsListSkeleton } from "@/components/candidate/applications-list-skeleton"

export default function CandidateApplicationsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">My Applications</h2>
      </div>

      <Suspense fallback={<ApplicationsListSkeleton />}>
        <ApplicationsList />
      </Suspense>
    </div>
  )
}

