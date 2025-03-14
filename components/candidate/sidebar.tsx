"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Bell, FileText, Home, Briefcase, User, Settings, Search, LogOut } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"

export function CandidateSidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full bg-muted/40">
        <MainSidebar />
        <div className="flex flex-col flex-1">
          <HeaderNav />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

function MainSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <div className="font-bold text-xl">JobHub</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/candidate/dashboard"} tooltip="Dashboard">
              <Link href="/candidate/dashboard">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/candidate/profile"} tooltip="Profile">
              <Link href="/candidate/profile">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/candidate/resume"} tooltip="Resume">
              <Link href="/candidate/resume">
                <FileText className="h-4 w-4" />
                <span>Resume</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/candidate/jobs"} tooltip="Job Search">
              <Link href="/candidate/jobs">
                <Search className="h-4 w-4" />
                <span>Job Search</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/candidate/applications"} tooltip="Applications">
              <Link href="/candidate/applications">
                <Briefcase className="h-4 w-4" />
                <span>Applications</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="/candidate/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Log Out">
              <Link href="/login">
                <LogOut className="h-4 w-4" />
                <span>Log Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

function HeaderNav() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <SidebarTrigger />
      <div className="flex-1" />

      <div className="relative">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
            3
          </Badge>
        </Button>
      </div>

      <ThemeToggle />

      <div className="flex gap-4 items-center">
        <div className="text-sm text-right hidden md:block">
          <div className="font-medium">Alex Morgan</div>
          <div className="text-muted-foreground">Job Seeker</div>
        </div>
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alex Morgan" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

