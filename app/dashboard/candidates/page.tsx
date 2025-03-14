import { Suspense } from "react"
import { CandidatesView } from "@/components/candidates/candidates-view"
import { CandidatesViewSkeleton } from "@/components/candidates/candidates-view-skeleton"

export default function CandidatesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Candidates</h2>
      </div>

      <Suspense fallback={<CandidatesViewSkeleton />}>
        <CandidatesView />
      </Suspense>
    </div>
  )
}

