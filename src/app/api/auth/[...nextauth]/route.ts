import NextAuth, { type NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

// 1. Lire AUTHORIZED_EMAILS et transformer en tableau
const authorizedEmails = process.env.AUTHORIZED_EMAILS
  ? process.env.AUTHORIZED_EMAILS.split(',').map(e => e.trim().toLowerCase())
  : []

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Shopify API Token',
      credentials: { token: { label: 'API Token', type: 'password' } },
      async authorize(creds) {
        if (!creds?.token || creds.token !== process.env.SHOPIFY_ACCESS_TOKEN) return null
        return { id: creds.token, name: 'Shopify Admin' }
      }
    }),
    GoogleProvider({
      clientId:   process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: { params: { prompt: 'select_account' } }
    })
  ],
  session: { strategy: 'jwt' as const },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        // 2. Vérifier si user.email (minuscules) est dans authorizedEmails
        return authorizedEmails.includes(user.email!.toLowerCase())
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) token.shopifyToken = user.id
      return token
    },
    async session({ session, token }) {
      ;(session as any).shopifyToken = token.shopifyToken
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { error: '/auth/error' }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
