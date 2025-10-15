'use client'
import { useSession, signOut } from "next-auth/react"

export default function Dashboard() {
  const { data: session } = useSession()

  if (!session) return <p>You are not signed in</p>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <button
        onClick={() => signOut()}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Sign Out
      </button>
    </div>
  )
}
