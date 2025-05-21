// src/components/Navbar.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/events", label: "Events" },
  { href: "/leaderboard", label: "Leaderboard" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b bg-background sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold">WikiClub</Link>
      <div className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button variant={pathname === item.href ? "default" : "ghost"}>{item.label}</Button>
          </Link>
        ))}
        <ModeToggle />
      </div>
    </nav>
  )
}