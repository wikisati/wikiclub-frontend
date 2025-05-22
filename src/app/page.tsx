"use client"

import { useEffect } from "react"
import { useUserStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function Home() {
  const { name, wikiId, setUser, clearUser } = useUserStore()

  const login = async () => {
    try {
      const res = await fetch("https://wikiclub.onrender.com/api/auth/init")
      const data = await res.json()
      window.location.href = data.redirect
    } catch {
      toast.error("Failed to initiate login")
    }
  }

  const logout = () => {
    clearUser()
    localStorage.removeItem("wikiclub_token")
    localStorage.removeItem("wikiclub_name")
    localStorage.removeItem("wikiclub_id")
    toast.success("Logged out successfully")
    window.location.href = "/"
  }

  const fetchUserProfile = async () => {
    const token = localStorage.getItem("wikiclub_token")
    if (!token) return

    try {
      const res = await fetch("https://wikiclub.onrender.com/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) {
        console.warn("User not authenticated, clearing localStorage")
        localStorage.removeItem("wikiclub_token")
        return
      }

      const data = await res.json()
      setUser({ name: data.name, wikiId: data.wiki_id })
    } catch (err) {
      console.error("Error fetching user profile", err)
    }
  }

  useEffect(() => {
    fetchUserProfile()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to WikiClub SATI</h1>
      <p className="mt-12 text-center text-sm text-muted-foreground">
        Wiki Club SATI is an extra-curricular club(community), formed at Samrat Ashok Technological Institute, Vidisha.
        <br />
        The club will create awareness about the Wikimedia projects and encourage active participation from students.
      </p>
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
        Built with ❤️ by WikiClub SATI· Powered by Wikimedia
      </footer>
    </main>
  )
}
