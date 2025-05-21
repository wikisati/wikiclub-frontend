"use client"
import { Button } from "@/components/ui/button"

export default function Home() {
  const login = async () => {
    try {
      const res = await fetch("https://wikiclub.onrender.com/api/auth/init")
      const data = await res.json()
      window.location.href = data.redirect
    } catch (err) {
      alert("Login only works on https://wikiclub.in")
      console.error(err)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <Button onClick={login}>Login with Wikipedia</Button>
    </main>
  )
}
