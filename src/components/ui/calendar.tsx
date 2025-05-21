"use client"

import { useState } from "react"
import { format } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const goToPreviousMonth = () => {
    const prevMonth = new Date(currentDate)
    prevMonth.setMonth(prevMonth.getMonth() - 1)
    setCurrentDate(prevMonth)
  }

  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    setCurrentDate(nextMonth)
  }

  return (
    <div className="border rounded-md p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" size="sm" onClick={goToPreviousMonth}>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <h2 className="text-md font-medium">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <Button variant="outline" size="sm" onClick={goToNextMonth}>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 text-center text-sm text-muted-foreground mb-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-medium">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {Array.from({ length: 42 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {/* Placeholder days for UI; can show heatmap counts here later */}
            {i < new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
              ? ""
              : i -
                new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() +
                1 <=
                new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
              ? i -
                new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() +
                1
              : ""}
          </div>
        ))}
      </div>
    </div>
  )
}
