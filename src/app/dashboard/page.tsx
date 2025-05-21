"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { useUserStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"

interface Stats {
  wiki_id: string
  total_edits: number
  total_bytes: number
  active_months: Record<string, number>
}

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const nameFromURL = searchParams.get("name")

  const { name, wikiId, setUser, clearUser } = useUserStore()
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    const storedName = localStorage.getItem("wikiclub_name")
    const storedId = localStorage.getItem("wikiclub_id")
    if (storedName && storedId) {
      setUser({ name: storedName, wikiId: storedId })
    } else if (nameFromURL) {
      setUser({ name: nameFromURL, wikiId: "from-url" })
      localStorage.setItem("wikiclub_name", nameFromURL)
      localStorage.setItem("wikiclub_id", "from-url")
    }
    setTimeout(() => setLoading(false), 1000)
  }, [nameFromURL, setUser])

  useEffect(() => {
    const token = localStorage.getItem("wikiclub_token")
    if (!token) return

    fetch("https://wikiclub.onrender.com/api/stats", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => toast.error("Failed to fetch stats"))
  }, [])

  const handleLogout = () => {
    clearUser()
    localStorage.clear()
    toast("Logged out successfully")
    window.location.href = "/"
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Welcome, <span className="text-blue-600 dark:text-blue-400">{name || "Contributor"}</span>!
        </h1>
        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <p className="mb-6 text-muted-foreground">
        This dashboard gives you insights into your Wikimedia contributions: edit streaks, top pages, global impact, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Calendar className="border rounded-md" />
        <div className="p-4 border rounded-md">
          <h2 className="text-lg font-semibold mb-2">📊 Contribution Overview</h2>
          {loading || !stats ? (
            <Skeleton className="h-24 w-full" />
          ) : (
            <ul className="text-sm list-disc ml-4 text-muted-foreground">
              <li>Total edits: {stats.total_edits}</li>
              <li>Bytes added: {stats.total_bytes.toLocaleString()}</li>
              <li>Active months: {Object.keys(stats.active_months).length}</li>
            </ul>
          )}
        </div>
      </div>

      <div className="mt-8 border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">🔥 Monthly Contributions</h2>
        {loading || !stats ? (
          <Skeleton className="h-36 w-full" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(stats.active_months).map(([month, count]) => (
              <div
                key={month}
                className="rounded-md border p-3 bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800"
              >
                <p className="text-sm text-muted-foreground">{month}</p>
                <p className="text-lg font-bold">{count}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 border rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">🌟 Upcoming Features</h2>
        <ul className="text-sm list-disc ml-4 text-muted-foreground">
          <li>GitHub-style contribution heatmap</li>
          <li>Top edited articles and projects</li>
          <li>Wikidata & Commons insights</li>
          <li>Event participation tracker</li>
        </ul>
      </div>
    </div>
  )
}
