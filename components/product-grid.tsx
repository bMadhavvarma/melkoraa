'use client'

import Link from 'next/link'
import { Heart, ShoppingBag } from 'lucide-react'
import { useMemo, useState } from 'react'
import { formatPrice, type Product } from '@/lib/catalog'
import { useStore } from '@/lib/store-context'

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore()
  const wished = isWishlisted(product.id)
  return <article className="catalog-product-card">
    <Link href={`/product/${product.id}`} aria-label={`View ${product.name}`}><div className="catalog-product-image"><img src={product.image} alt={product.name} /><button className="catalog-heart" aria-label={`${wished ? 'Remove' : 'Add'} ${product.name} ${wished ? 'from' : 'to'} wishlist`} onClick={(event) => { event.preventDefault(); event.stopPropagation(); toggleWishlist(product.id) }}><Heart size={18} fill={wished ? 'currentColor' : 'none'} /></button>{product.badge && <span className="catalog-badge">{product.badge}</span>}</div></Link>
    <div className="catalog-product-info"><div><h3>{product.name}</h3><p>{formatPrice(product.price)}</p></div>{product.type === 'accessories' ? <button className="catalog-add" aria-label={`Add ${product.name} to bag`} onClick={() => addToCart(product, { color: product.colors[0], size: 'ONE SIZE' })}><ShoppingBag size={16} /></button> : <Link className="catalog-add" href={`/product/${product.id}`} aria-label={`Choose options for ${product.name}`}><ShoppingBag size={16} /></Link>}</div>
    <div className="catalog-swatches">{product.colors.map((color) => <i key={color} style={{ backgroundColor: color }} />)}</div>
  </article>
}

export function ProductGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('featured')
  const [type, setType] = useState('all')
  const filtered = useMemo(() => products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()) && (type === 'all' || product.type === type)).sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : 0), [products, query, sort, type])
  return <section className="catalog-products"><div className="catalog-toolbar"><label>SEARCH <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this collection" /></label><div className="catalog-filters"><select aria-label="Filter by type" value={type} onChange={(event) => setType(event.target.value)}><option value="all">All pieces</option><option value="tshirts">T-shirts</option><option value="hoodies">Hoodies</option><option value="cargos">Cargos</option><option value="accessories">Accessories</option><option value="shirts">Shirts</option></select><select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div></div><p className="catalog-count">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>{filtered.length ? <div className="catalog-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="catalog-empty"><h2>No pieces found.</h2><p>Try another search or filter.</p></div>}</section>
}

export function CartPanel() {
  const { cart, cartCount, cartOpen, setCartOpen, updateCartQuantity, removeFromCart } = useStore()
  if (!cartOpen) return null
  return <div className="modal-backdrop" onClick={() => setCartOpen(false)}><aside className="side-panel cart-panel" onClick={(event) => event.stopPropagation()}><button className="panel-close" aria-label="Close bag" onClick={() => setCartOpen(false)}>×</button><p className="eyebrow">YOUR BAG / {cartCount}</p>{cart.length ? <>{cart.map((item) => <div className="cart-line" key={`${item.id}-${item.size}-${item.color}`}><img src={item.image} alt="" /><div><h3>{item.name}</h3><p>{item.size ? `Size ${item.size} · ` : ''}{formatPrice(item.price)}</p><div className="cart-quantity"><button aria-label={`Decrease ${item.name}`} onClick={() => updateCartQuantity(item.id, item, -1)}>−</button><span>{item.quantity}</span><button aria-label={`Increase ${item.name}`} onClick={() => updateCartQuantity(item.id, item, 1)}>+</button><button className="cart-remove" onClick={() => removeFromCart(item.id, item)}>Remove</button></div></div></div>)}<Link href="/checkout" className="button dark-button cart-checkout" onClick={() => setCartOpen(false)}>CHECKOUT <ShoppingBag size={15} /></Link></> : <><h2>Your bag is empty.</h2><p>Discover pieces made for a higher tomorrow.</p><Link href="/collections" className="button dark-button" onClick={() => setCartOpen(false)}>CONTINUE SHOPPING</Link></>}</aside></div>
}
