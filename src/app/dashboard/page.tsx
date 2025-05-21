"use client"

import { useSearchParams } from "next/navigation"

export default function Dashboard() {
  const params = useSearchParams()
  const name = params.get("name")

  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <h1 className="text-xl font-semibold">Welcome, {name || "User"}!</h1>
    </main>
  )
}
