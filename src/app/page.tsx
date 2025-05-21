"use client"

import { useEffect } from "react"
import { useUserStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function Home() {
  const { name, wikiId, setUser } = useUserStore()

  const login = async () => {
    try {
      const res = await fetch("https://wikiclub.onrender.com/api/auth/init")
      const data = await res.json()
      window.location.href = data.redirect
    } catch {
      toast.error("Failed to initiate login")
    }
  }

  const fetchUserProfile = async () => {
    try {
      const res = await fetch("https://wikiclub.onrender.com/api/me", {
        method: "GET",
        credentials: "include",
      })
      if (!res.ok) return
      const data = await res.json()
      setUser({ name: data.name, wikiId: data.wiki_id })
    } catch {
      console.error("Error fetching user profile")
    }
  }

  useEffect(() => {
    fetchUserProfile()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to WikiClub SATI</h1>
      {wikiId ? (
        <>
          <p className="text-lg mb-4">
            Logged in as <span className="font-semibold">{name}</span>
          </p>
          <Button onClick={logout}>Logout</Button>
        </>
      ) : (
        <Button onClick={login}>Login with Wikipedia</Button>
      )}
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        Built with ❤️ by WikiClub SATI · Powered by Wikimedia
      </footer>
    </main>
  )
}
