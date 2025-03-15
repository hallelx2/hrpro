import type React from "react"
import { CandidateSidebar } from "@/components/candidate/sidebar"

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CandidateSidebar>{children}</CandidateSidebar>
}
