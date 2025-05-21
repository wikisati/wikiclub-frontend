"use client"

import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar"
import { useUserStore } from "@/lib/store"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const name = useUserStore((state) => state.name)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="w-full text-center text-sm py-2 text-muted-foreground">
            {name && `Welcome, ${name}!`}
          </div>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
