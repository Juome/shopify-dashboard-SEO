// src/lib/shopify.ts
const SHOP = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;

if (!SHOP || !TOKEN) {
  throw new Error('SHOPIFY_STORE_DOMAIN et SHOPIFY_ACCESS_TOKEN doivent être définis');
}

/**
 * Envoie une requête à l’Admin API Shopify.
 * @param path Le chemin API, ex. '/admin/api/2025-04/products.json'
 * @param options Options pour fetch (méthode, body…)
 */
export async function shopifyFetch<T = any>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `https://${SHOP}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': TOKEN,
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Shopify API error ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}
