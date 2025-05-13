'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

interface UserProfile {
  mediawiki_username: string
  mediawiki_email: string
  mediawiki_edit_count: number
  mediawiki_registration_date: string
  last_login_time: string
  avatar_url: string | null
}

interface User {
  id: number
  username: string
  profile: UserProfile
}

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/dashboard/`, {
        withCredentials: true
      })
      setUser(response.data)
    } catch (error) {
      router.push('/')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/api/logout/`, {}, {
        withCredentials: true
      })
      router.push('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          {user.profile.avatar_url ? (
            <img
              src={user.profile.avatar_url}
              alt={user.profile.mediawiki_username}
              className="w-20 h-20 rounded-full"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-2xl text-gray-500">
                {user.profile.mediawiki_username[0].toUpperCase()}
              </span>
            </div>
          )}
          <div>
            <h2 className="text-2xl font-semibold">{user.profile.mediawiki_username}</h2>
            <p className="text-gray-600">{user.profile.mediawiki_email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Edit Count</h3>
            <p className="text-2xl text-primary">{user.profile.mediawiki_edit_count.toLocaleString()}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Registration Date</h3>
            <p className="text-gray-600">
              {new Date(user.profile.mediawiki_registration_date).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Last Login</h3>
            <p className="text-gray-600">
              {new Date(user.profile.last_login_time).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Debug section to display user details */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Debug: User Details</h3>
          <pre className="text-sm text-gray-800 overflow-auto">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
} 