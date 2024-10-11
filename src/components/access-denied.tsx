'use client'

import { AlertTriangle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function AccessDeniedComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-gray-100">
      <Card className="w-full max-w-md bg-secondary border-gray-700">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-yellow-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">Access Denied</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-300">
            Sorry, you don&apos;t have permission to access the dashboard. Please contact your administrator if you believe this is an error.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild variant="outline" className="bg-gray-700 text-white hover:bg-gray-600">
            <Link href="/">
              Go to Home Page
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}