'use client'

import Link from 'next/link'
import { Check, Search, X } from 'lucide-react'
import { useStore } from '@/lib/store-context'
import { formatPrice, products } from '@/lib/catalog'

export function CartToast() {
  const { toast, dismissToast } = useStore()
  if (!toast) return null
  return <div className="cart-toast" role="status"><div className="cart-toast-icon"><Check size={15} /></div><div className="cart-toast-copy"><b>ADDED TO BAG</b><span>{toast.product.name}</span><small>{toast.variant?.size ? `Size ${toast.variant.size} · ` : ''}{formatPrice(toast.product.price)}</small></div><button className="cart-toast-close" onClick={dismissToast} aria-label="Dismiss notification"><X size={16} /></button><Link href="/checkout" className="cart-toast-action" onClick={dismissToast}>VIEW CART</Link></div>
}

export function GlobalSearch({ onClose }: { onClose: () => void }) {
  const { searchQuery, setSearchQuery } = useStore()
  const normalized = searchQuery.trim().toLowerCase()
  const results = normalized ? products.filter((product) => [product.name, product.category, product.type, product.description].join(' ').toLowerCase().includes(normalized)).slice(0, 6) : []
  return <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search products" onClick={onClose}><div className="search-drawer" onClick={(event) => event.stopPropagation()}><div className="search-input-row"><Search size={17} /><input autoFocus value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search products, collections..." /><button onClick={() => setSearchQuery('')} aria-label="Clear search"><X size={16} /></button></div>{normalized ? <div className="search-results">{results.length ? results.map((product) => <Link href={`/product/${product.id}`} key={product.id} onClick={onClose}><img src={product.image} alt="" /><span><b>{product.name}</b><small>{product.category} · {formatPrice(product.price)}</small></span></Link>) : <p className="search-empty">No pieces found for “{searchQuery}”.</p>}</div> : <p className="search-hint">Search by product, category, or type.</p>}</div></div>
}
