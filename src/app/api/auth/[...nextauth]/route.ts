// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: 'shopify',
      name: 'Shopify',
      type: 'oauth',
      version: '2.0',
      // point d’entrée pour autoriser l’accès
      authorization: {
        url: `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/oauth/authorize`,
        params: { scope: 'read_products write_products' },
      },
      // URL pour échanger le code contre un access token
      token: `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/oauth/access_token`,
      // URL pour récupérer les infos du shop (ici l’objet shop)
      userinfo: `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2023-10/shop.json`,
      // Mapper la réponse de Shopify dans le profile utilisateur
      async profile(response: any) {
        const shop = response.shop ?? {}
        return {
          id: shop.id?.toString() || shop.myshopify_domain,
          name: shop.name,
          email: undefined,      // Shopify n’expose pas l’email du shop
          image: undefined,
        }
      },
    },
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
