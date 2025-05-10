'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    router.push('/')
    return null
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <button
        onClick={() => signIn('google')}
        className="mb-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Se connecter avec Google
      </button>
      {/* … ton formulaire Credentials existant … */}
    </main>
  )
}
