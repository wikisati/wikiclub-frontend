// src/app/events/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const dummyEvents = [
  { title: "Wiki Loves Folklore", date: "2025-06-01", desc: "A global photo campaign celebrating local traditions." },
  { title: "Wikidata India Month", date: "2025-07-10", desc: "A month-long Wikidata editing challenge." },
  { title: "Wiki Women in Red", date: "2025-08-15", desc: "Drive to create articles about notable women." },
]

export default function EventsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Upcoming Campaigns</h1>
      <div className="grid gap-6">
        {dummyEvents.map((event, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}