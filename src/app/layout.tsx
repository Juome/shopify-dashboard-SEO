// src/app/layout.tsx
import React from 'react'
import Providers from '@components/Providers'

export const metadata = {
  title: 'Shopify Dashboard SEO',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <header className="p-4 bg-gray-100">🔗 Mon Dashboard</header>
          {children}
        </Providers>
      </body>
    </html>
  )
}
