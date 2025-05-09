'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    router.push('/') // déjà loggé, redirige à la home
    return null
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-lg"
        onClick={() => signIn('shopify')}
      >
        🔒 Se connecter à Shopify
      </button>
    </main>
  )
}
