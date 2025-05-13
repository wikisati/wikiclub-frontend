"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/dashboard/`, {
          withCredentials: true,
        })
        setUser(response.data)
        router.push('/dashboard')
      } catch (err: any) {
        if (err.response) {
          setUser(null)
        } else {
          setError('Could not connect to the server. Please try again later.')
        }
      } finally {
        setIsLoading(false)
      }
    }
    checkAuth()
  }, [router])

  const handleLogin = () => {
    window.location.href = `${API_URL}/api/login/`
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-red-500 mb-8">{error}</p>
        <button
          onClick={handleLogin}
          className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Try Login with Wikimedia
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-8">Welcome to Wiki Club</h1>
      <p className="text-xl text-gray-600 mb-8">
        Connect with your Wikimedia account to get started
      </p>
      <button
        onClick={handleLogin}
        className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
      >
        Login with Wikimedia
      </button>
    </div>
  )
} 