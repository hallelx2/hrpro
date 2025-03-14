import { Suspense } from "react"
import { JobSearch } from "@/components/candidate/job-search"
import { JobSearchSkeleton } from "@/components/candidate/job-search-skeleton"

export default function CandidateJobsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Job Search</h2>
      </div>

      <Suspense fallback={<JobSearchSkeleton />}>
        <JobSearch />
      </Suspense>
    </div>
  )
}

