'use client'

import Link from 'next/link'
import { ArrowRight, CircleUserRound, Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { assets, products } from '@/lib/catalog'
import { useStore } from '@/lib/store-context'
import { CartPanel, ProductCard } from '@/components/product-grid'

export default function WishlistPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { wishlist, cartCount, setCartOpen } = useStore()
  const savedProducts = products.filter((product) => wishlist.includes(product.id))

  return <main className="collections-page">
    <div className="announcement"><span>A HIGHER TOMORROW</span><span>FREE SHIPPING ON ALL ORDERS ABOVE ₹1999</span><span>INDIA (₹) &nbsp; | &nbsp; STORES &nbsp; | &nbsp; TRACK ORDER</span></div>
    <header className="site-header">
      <button className="mobile-trigger" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={22} /></button>
      <Link href="/" aria-label="MELKORAA home"><div className="brand-mark"><img src={assets.logo} alt="MELKORAA" /></div></Link>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
        <button className="mobile-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={22} /></button>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><Link href="/collections/men" onClick={() => setMenuOpen(false)}>Men</Link><Link href="/collections/women" onClick={() => setMenuOpen(false)}>Women</Link><Link href="/collections/kids" onClick={() => setMenuOpen(false)}>Kids</Link><Link href="/collections" onClick={() => setMenuOpen(false)}>Collections</Link><Link href="/offers" onClick={() => setMenuOpen(false)}>Offers</Link><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link><Link href="/journal" onClick={() => setMenuOpen(false)}>Journal</Link>
      </nav>
      <div className="header-actions"><Link className="search-pill" href="/collections"><Search size={16} /><span>Search for products, collections...</span></Link><Link href="/account" aria-label="Account"><CircleUserRound size={20} /></Link><Link href="/wishlist" aria-label="Wishlist"><Heart size={20} fill={wishlist.length ? 'currentColor' : 'none'} /></Link><button aria-label="Shopping bag" className="bag-button" onClick={() => setCartOpen(true)}><ShoppingBag size={21} /><b>{cartCount}</b></button></div>
    </header>
    <section className="catalog-hero"><div><p className="eyebrow">YOUR EDIT</p><span className="small-rule" /><h1>WISHLIST</h1><p>Pieces you want to keep close.</p></div></section>
    <section className="catalog-products wishlist-products"><div className="wishlist-heading"><p className="eyebrow">YOUR EDIT / {savedProducts.length}</p><h1>WISHLIST</h1><p>Pieces you want to keep close.</p></div>{savedProducts.length ? <><div className="section-heading"><div><p className="eyebrow">SAVED PIECES</p><p>{savedProducts.length} {savedProducts.length === 1 ? 'piece' : 'pieces'} waiting for you.</p></div><Link href="/collections">CONTINUE SHOPPING <ArrowRight size={15} /></Link></div><div className="catalog-grid">{savedProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></> : <div className="catalog-empty wishlist-empty"><Heart size={28} /><h2>Your wishlist is waiting.</h2><p>Save the pieces that feel like you and find them here anytime.</p><Link href="/collections" className="button dark-button">EXPLORE COLLECTIONS <ArrowRight size={15} /></Link></div>}</section>
    <CartPanel />
  </main>
}
