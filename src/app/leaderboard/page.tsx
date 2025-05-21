// src/app/leaderboard/page.tsx
"use client"
import { Skeleton } from "@/components/ui/skeleton"


const contributors = [
  { name: "Dev Jadiya", edits: 1234, bytes: 1048576 },
  { name: "Priya S.", edits: 987, bytes: 512000 },
  { name: "Rahul P.", edits: 789, bytes: 321456 },
]

export default function LeaderboardPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Leaderboard</h1>
      <table className="w-full text-left border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Edits</th>
            <th className="p-2">Bytes Added</th>
          </tr>
        </thead>
        <tbody>
          {contributors.map((u, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.edits}</td>
              <td className="p-2">{(u.bytes / 1024).toFixed(1)} KB</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
