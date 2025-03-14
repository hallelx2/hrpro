import { redirect } from "next/navigation"

export default function CandidateIndexPage() {
  // Redirect to the dashboard as the main entry point
  redirect("/candidate/dashboard")
}

