// ✅ Create this file at: src/components/ui/card.tsx

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-white text-black dark:bg-black dark:text-white shadow-sm", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-4 border-b", className)} {...props} />
)

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-lg font-semibold", className)} {...props} />
)

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-4", className)} {...props} />
)
