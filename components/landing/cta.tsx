import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to transform your hiring process?
          </h2>
          <p className="mt-6 text-xl">
            Join thousands of companies that have streamlined their recruitment workflow and found better candidates
            faster.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="/dashboard">Get Started for Free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              <Link href="#contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

