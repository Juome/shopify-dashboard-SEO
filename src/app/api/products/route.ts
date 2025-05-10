import { NextResponse, type NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { shopifyFetch } from '@lib/shopify'

const secret = process.env.NEXTAUTH_SECRET!

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret })
  if (!token?.shopifyToken) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }
  const data = await shopifyFetch<{ products: any[] }>('/admin/api/2025-04/products.json')
  return NextResponse.json(data)
}
