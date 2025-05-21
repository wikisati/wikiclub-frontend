// src/lib/api.ts

export async function getUserProfile() {
  try {
    const token = localStorage.getItem("access_token")
    const res = await fetch("https://wikiclub.onrender.com/api/me", {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (!res.ok) throw new Error("Failed to fetch user profile")
    return await res.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function getUserStats() {
  try {
    const token = localStorage.getItem("access_token")
    const res = await fetch("https://wikiclub.onrender.com/api/stats", {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (!res.ok) throw new Error("Failed to fetch contribution stats")
    return await res.json()
  } catch (error) {
    console.error(error)
    return null
  }
}

export async function logoutUser() {
  try {
    const token = localStorage.getItem("access_token")
    await fetch("https://wikiclub.onrender.com/api/logout", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
  } finally {
    localStorage.removeItem("access_token")
    window.location.href = "/"
  }
}
