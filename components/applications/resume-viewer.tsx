"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from "lucide-react"

export function ResumeViewer() {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const totalPages = 2

  const zoomClass = useMemo(() => {
    // Map zoom value to the closest predefined class
    if (zoom <= 50) return "transform-scale-50";
    if (zoom <= 75) return "transform-scale-75";
    if (zoom <= 100) return "transform-scale-100";
    if (zoom <= 125) return "transform-scale-125";
    if (zoom <= 150) return "transform-scale-150";
    if (zoom <= 175) return "transform-scale-175";
    return "transform-scale-200";
  }, [zoom]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleZoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 25)
    }
  }

  const handleZoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 25)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={handlePrevPage} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button variant="outline" size="icon" onClick={handleNextPage} disabled={currentPage === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={handleZoomOut} disabled={zoom <= 50}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm">{zoom}%</span>
          <Button variant="outline" size="icon" onClick={handleZoomIn} disabled={zoom >= 200}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden bg-white border rounded-md">
        <div
          className={`min-h-[800px] flex items-center justify-center p-4 ${zoomClass} origin-top-center`}
        >
          {currentPage === 1 ? (
            <div className="max-w-[600px] w-full mx-auto p-8 shadow-sm">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Olivia Johnson</h1>
                <p className="text-muted-foreground">Senior Frontend Developer</p>
                <div className="flex justify-center gap-4 mt-2 text-sm">
                  <span>olivia.johnson@example.com</span>
                  <span>(555) 123-4567</span>
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2">Summary</h2>
                <p className="text-sm">
                  Experienced Frontend Developer with over 7 years of expertise in building responsive web applications.
                  Proficient in React, TypeScript, and modern JavaScript frameworks. Passionate about creating intuitive
                  user interfaces and optimizing application performance.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2">Skills</h2>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <ul className="list-disc list-inside">
                      <li>React & React Hooks</li>
                      <li>TypeScript</li>
                      <li>JavaScript (ES6+)</li>
                      <li>HTML5 & CSS3</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc list-inside">
                      <li>Redux</li>
                      <li>Node.js</li>
                      <li>Responsive Design</li>
                      <li>Performance Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2">Experience</h2>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Frontend Developer</h3>
                    <span className="text-sm">2019 - 2023</span>
                  </div>
                  <div className="text-sm font-medium">Tech Innovations Inc.</div>
                  <ul className="list-disc list-inside text-sm mt-1">
                    <li>Led development of responsive web applications using React and TypeScript</li>
                    <li>Implemented state management with Redux and optimized performance</li>
                    <li>Collaborated with UX designers to implement intuitive user interfaces</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-medium">Web Developer</h3>
                    <span className="text-sm">2016 - 2019</span>
                  </div>
                  <div className="text-sm font-medium">Digital Solutions LLC</div>
                  <ul className="list-disc list-inside text-sm mt-1">
                    <li>Developed and maintained client websites</li>
                    <li>Collaborated with designers to implement UI/UX improvements</li>
                    <li>Optimized website performance and responsiveness</li>
                    <li>Implemented tracking and analytics solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-[600px] w-full mx-auto p-8 shadow-sm">
              <div className="mb-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2">Education</h2>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-medium">B.S. Computer Science</h3>
                    <span className="text-sm">2016</span>
                  </div>
                  <div className="text-sm">University of California, Berkeley</div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2">Certifications</h2>
                <ul className="list-disc list-inside text-sm">
                  <li>AWS Certified Developer</li>
                  <li>React Certification</li>
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold border-b pb-1 mb-2">Projects</h2>
                <div className="mb-3">
                  <h3 className="font-medium">E-commerce Platform Redesign</h3>
                  <p className="text-sm mt-1">
                    Led the frontend development for a complete redesign of an e-commerce platform, resulting in a 35%
                    increase in conversion rate and 25% reduction in bounce rate. Implemented responsive design,
                    optimized performance, and improved accessibility.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Real-time Analytics Dashboard</h3>
                  <p className="text-sm mt-1">
                    Developed a real-time analytics dashboard using React, Redux, and WebSockets. Created reusable chart
                    components and implemented data filtering and visualization features.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold border-b pb-1 mb-2">References</h2>
                <p className="text-sm">Available upon request</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
