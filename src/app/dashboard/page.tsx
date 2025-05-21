"use client"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function DashboardContent() {
  const params = useSearchParams()
  const name = params.get("name") || "User"

  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <h1 className="text-xl font-semibold">Welcome, {name}!</h1>
    </main>
  )
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}
