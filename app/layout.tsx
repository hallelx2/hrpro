import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/app/theme-provider"
import { NotificationProvider } from "@/components/notifications/notification-provider"
import "./globals.css"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

const metadata: Metadata = {
  title: "Job Portal",
  description: "Job Portal",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NotificationProvider>{children}</NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
