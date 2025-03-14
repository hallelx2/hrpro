"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { Briefcase } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, role: string) => {
    event.preventDefault()
    setIsLoading(true)

    // Simulate registration delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demo purposes, redirect based on role
    if (role === "job-seeker") {
      router.push("/candidate/dashboard")
      toast("Account created!")
    } else {
      router.push("/register/organization")
      toast("Account created!")
    }

    setIsLoading(false)
  }

  return (
    <div className="container relative min-h-screen flex pt-10 pb-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[400px]">
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="flex items-center gap-2">
            <Briefcase className="h-10 w-10 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">JobHub</h1>
          </div>
          <p className="text-base text-muted-foreground">Create an account to get started</p>
        </div>

        <Tabs defaultValue="job-seeker" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-11">
            <TabsTrigger value="job-seeker" className="text-base">Job Seeker</TabsTrigger>
            <TabsTrigger value="recruiter" className="text-base">Recruiter</TabsTrigger>
          </TabsList>

          <TabsContent value="job-seeker">
            <Card className="shadow-lg">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Create a Job Seeker Account</CardTitle>
                <CardDescription className="text-base">Start applying to jobs and get matched with opportunities</CardDescription>
              </CardHeader>
              <form onSubmit={(e) => handleSubmit(e, "job-seeker")}>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="js-first-name" className="text-base">First Name</Label>
                      <Input id="js-first-name" required className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="js-last-name" className="text-base">Last Name</Label>
                      <Input id="js-last-name" required className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="js-email" className="text-base">Email</Label>
                    <Input id="js-email" type="email" placeholder="name@example.com" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="js-password" className="text-base">Password</Label>
                    <div className="relative">
                      <Input
                        id="js-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        className="h-11"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="js-terms" required className="h-5 w-5" />
                    <label
                      htmlFor="js-terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button className="w-full h-11" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="recruiter">
            <Card className="shadow-lg">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Create a Recruiter Account</CardTitle>
                <CardDescription className="text-base">Join your organization or create a new one</CardDescription>
              </CardHeader>
              <form onSubmit={(e) => handleSubmit(e, "recruiter")}>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="rec-first-name" className="text-base">First Name</Label>
                      <Input id="rec-first-name" required className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rec-last-name" className="text-base">Last Name</Label>
                      <Input id="rec-last-name" required className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rec-email" className="text-base">Work Email</Label>
                    <Input id="rec-email" type="email" placeholder="name@company.com" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rec-password" className="text-base">Password</Label>
                    <div className="relative">
                      <Input
                        id="rec-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        className="h-11"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="rec-terms" required className="h-5 w-5" />
                    <label
                      htmlFor="rec-terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button className="w-full h-11" type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      "Create Account & Continue"
                    )}
                  </Button>
                  <div className="flex flex-col space-y-2 text-center text-sm text-muted-foreground">
                    <p>
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </p>
                    <p>
                      Need to register your organization?{" "}
                      <Link href="/register/organization" className="text-primary hover:underline">
                        Register organization
                      </Link>
                    </p>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
