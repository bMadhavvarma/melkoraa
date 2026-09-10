'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  CircleUserRound,
  Heart,
  Menu,
  Package,
  Play,
  Search,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Users,
  X,
} from 'lucide-react'

const image = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%20page%20background-qhOLBViOo7lwbeiZ3BhsHj2K0vx5Mf.png',
  men: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/men%20wear%20image-ZE4azsdZieuW8sy82MmrLn2jOuz4bZ.png',
  women: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/men%20image%202-KAYkegWkvf0okglUvye9Dw4gi3an5E.png',
  kids: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kids%20image-dYjxCIMxILWzfmWOIo2yO16FZ36ge1.png',
  shirt: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t-shirt-MuGlewG9LStKMRbHxxjY18BZ1KeGXf.png',
  hoodie: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/huddy-RYRr5Gy5YQTm4lsP155KOzHfBeQcAt.png',
  pant: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pant-cnZ00YClo5IiQPOGiMJFgwX6wPAZVU.png',
  overshirt: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shirt-NtQfK9HPoAoUQ9frA0TBHAxsMJAG1S.png',
  footer: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer-UWiLcQASI4vXVWv6kHxFFNP3Ex1kEo.png',
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-J52C3j0NTF4XGXeEpoaYDiS2kWPkjT.png',
}

const products = [
  { name: 'Signature Tee', price: '₹1,299', image: image.shirt, tag: 'NEW' },
  { name: 'Essential Hoodie', price: '₹1,999', image: image.hoodie, tag: 'NEW' },
  { name: 'Urban Cargo', price: '₹2,199', image: image.pant, tag: '' },
  { name: 'Minimal Overshirt', price: '₹2,499', image: image.overshirt, tag: '' },
  { name: 'Core Tee', price: '₹2,299', image: image.shirt, tag: '' },
  { name: 'Everyday Hoodie', price: '₹1,999', image: image.hoodie, tag: '' },
]

function Logo({ compact = false }: { compact?: boolean }) {
  return <div className={`brand-mark ${compact ? 'brand-mark-compact' : ''}`}><img src={image.logo} alt="MELKORAA" /></div>
}

export default function MelkoraaStore() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [liked, setLiked] = useState<number[]>([])
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const visibleProducts = useMemo(() => products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())), [query])
  const toggleLike = (index: number) => setLiked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])

  return (
    <main className="storefront">
      <div className="announcement"><span>A HIGHER TOMORROW</span><span>FREE SHIPPING ON ALL ORDERS ABOVE ₹1999</span><span>INDIA (₹) &nbsp; | &nbsp; STORES &nbsp; | &nbsp; TRACK ORDER</span></div>
      <header className="site-header">
        <button className="mobile-trigger" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={22} /></button>
        <a href="#top" aria-label="MELKORAA home"><Logo /></a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          <button className="mobile-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={22} /></button>
          {['Men', 'Women', 'Kids', 'Collections', 'Offers', 'About', 'Journal'].map((item) => item === 'Collections' ? <Link key={item} href="/collections" onClick={() => setMenuOpen(false)}>{item}</Link> : <a key={item} href={item === 'Journal' ? '#journal' : '#new-arrivals'} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <button className="search-pill" onClick={() => setSearchOpen(!searchOpen)}><Search size={16} /><span>Search for products, collections...</span></button>
          <button aria-label="Account"><CircleUserRound size={20} /></button>
          <button aria-label="Wishlist" onClick={() => setLiked(liked.length ? [] : [0])}><Heart size={20} fill={liked.length ? 'currentColor' : 'none'} /></button>
          <button aria-label="Shopping bag" className="bag-button" onClick={() => setCartOpen(true)}><ShoppingBag size={21} /><b>0</b></button>
        </div>
      </header>
      {searchOpen && <div className="search-drawer"><Search size={18} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the collection" /><button onClick={() => { setQuery(''); setSearchOpen(false) }}><X size={18} /></button></div>}

      <section id="top" className="hero-section">
        <img src={image.hero} alt="MELKORAA model wearing black essentials beside a mountain wall" />
        <div className="hero-copy"><p className="eyebrow">WEAR A HIGHER YOU</p><span className="small-rule" /><h1>INDIVIDUALITY<br />IN EVERY THREAD</h1><p className="hero-text">Premium essentials for those who choose<br className="desktop-only" /> progress over ordinary.</p><div className="hero-buttons"><Link className="button dark-button" href="/collections">SHOP COLLECTIONS <ArrowRight size={15} /></Link><button className="button light-button" onClick={() => setVideoOpen(true)}>WATCH OUR STORY <Play size={13} fill="currentColor" /></button></div><div className="metrics"><div><strong>50K+</strong><span>HAPPY CUSTOMERS</span></div><div><strong>4.8<span className="star">★</span></strong><span>AVERAGE RATING</span></div><div><strong>PAN INDIA</strong><span>SHIPPING</span></div></div></div><div className="hero-scroll"><span>01</span><i /><span>02</span><i /><span>03</span><small>SCROLL<br />TO EXPLORE <ArrowDown size={14} /></small></div>
      </section>

      <section id="collections" className="category-grid">
        {[['MEN', 'STRENGTH\nIN SIMPLICITY', image.men], ['WOMEN', 'GRACE\nIN MOTION', image.women], ['KIDS', 'BIGGER\nTOMORROWS', image.kids]].map(([title, subtitle, src]) => <a className="category-card" href="#new-arrivals" key={title} style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.74), rgba(0,0,0,.02)), url("${src}")` }}><div><h2>{title}</h2><p>{subtitle.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</p><span className="text-link">EXPLORE <ArrowRight size={14} /></span></div></a>)}
      </section>

      <section id="new-arrivals" className="products-section"><div className="section-heading"><div><p className="eyebrow">NEW ARRIVALS</p><p>Everyday essentials. Elevated.</p></div><Link href="/collections">VIEW ALL <ArrowRight size={15} /></Link></div><div className="product-grid">{visibleProducts.map((product, index) => <article className="product-card" key={product.name}><div className="product-image"><img src={product.image} alt={product.name} /><button className="heart-button" aria-label={`Add ${product.name} to wishlist`} onClick={() => toggleLike(index)}><Heart size={18} fill={liked.includes(index) ? 'currentColor' : 'none'} /></button></div>{product.tag && <span className="product-tag">{product.tag}</span>}<h3>{product.name}</h3><p>{product.price}</p><div className="product-meta"><span className="swatches"><i /><i /><i /></span><button aria-label={`Like ${product.name}`} onClick={() => toggleLike(index)}><Heart size={16} fill={liked.includes(index) ? 'currentColor' : 'none'} /></button></div></article>)}</div></section>

      <section className="editorial-split"><a className="editorial-card fabric-card" href="#story"><div><h2>DETAILS<br />DEFINE<br />DISTINCTION</h2><p>Premium materials.<br />Thoughtful craftsmanship.<br />Made to last.</p><span className="text-link">LEARN MORE <ArrowRight size={14} /></span></div></a><a className="editorial-card mountain-card" href="#story" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.54), rgba(0,0,0,.05)), url("${image.footer}")` }}><div><h2>A LARGER<br />TOMORROW</h2><p>Sustainable choices.<br />Stronger communities.<br />A brighter tomorrow.</p><span className="text-link">OUR IMPACT <ArrowRight size={14} /></span></div></a></section>

      <section className="benefits"><div><Truck /><span><b>FREE SHIPPING</b>Above ₹1999</span></div><div><Package /><span><b>EASY RETURNS</b>Hassle free</span></div><div><ShieldCheck /><span><b>SECURE PAYMENTS</b>100% Safe</span></div><div><span className="leaf">⌁</span><span><b>PREMIUM MATERIALS</b>Built to last</span></div><div><Users /><span><b>A GROWING COMMUNITY</b>A higher you</span></div></section>

      <section id="story" className="story-section"><div className="story-copy"><p className="eyebrow">OUR STORY</p><h2>MORE<br />THAN FASHION</h2><p>MELKORAA is a movement towards a more conscious, confident and individual you.</p><a className="button light-button" href="#journal">READ OUR STORY <ArrowRight size={15} /></a></div><div className="story-image" style={{ backgroundImage: `url("${image.hero}")` }}><div><p>PEOPLE<br />PURPOSE<br />PROGRESS</p><span /> <small>CLOTHING<br />A COMMUNITY<br />A HIGHER TOMORROW</small></div><blockquote>“Better clothes<br /><em>for a brighter you.</em>”<small>— MELKORAA</small></blockquote></div></section>

      <section id="journal" className="journal-section"><div><p className="eyebrow">FROM OUR JOURNAL</p><p>Ideas. People. A Higher Tomorrow.</p><a className="button light-button" href="#journal">EXPLORE JOURNAL <ArrowRight size={15} /></a></div><div className="journal-strip">{[image.men, image.women, image.footer, image.shirt, image.overshirt, image.logo, image.hero].map((src, index) => <img key={src + index} src={src} alt="MELKORAA journal" />)}</div></section>

      <section className="newsletter" style={{ backgroundImage: `linear-gradient(rgba(7,7,7,.78), rgba(7,7,7,.78)), url("${image.footer}")` }}><div><p className="eyebrow">JOIN THE MELKORAA COMMUNITY</p><p>Get early access to new drops, exclusive offers and stories.</p></div>{subscribed ? <strong className="subscribed">You are on the list. Welcome to the community.</strong> : <form onSubmit={(event) => { event.preventDefault(); if (email) setSubscribed(true) }}><input aria-label="Email address" type="email" required placeholder="Enter your email address" value={email} onChange={(event) => setEmail(event.target.value)} /><button type="submit">SUBSCRIBE <ArrowRight size={15} /></button></form>}</section>

      <footer className="site-footer"><div className="footer-brand"><Logo compact /><p>A HIGHER TOMORROW</p></div><div><h3>SHOP</h3><a href="#new-arrivals">Men</a><a href="#new-arrivals">Women</a><a href="#new-arrivals">Kids</a><a href="#collections">Collections</a><a href="#new-arrivals">Offers</a></div><div><h3>ABOUT</h3><a href="#story">Our Story</a><a href="#story">Sustainability</a><a href="#story">Community</a><a href="#story">Careers</a><a href="#story">Press</a></div><div><h3>HELP</h3><a href="#top">Size Guide</a><a href="#top">Shipping</a><a href="#top">Returns</a><a href="#top">Track Order</a><a href="#top">FAQs</a></div><div className="social"><h3>FOLLOW US</h3><span><span className="social-letter">◎</span><span className="social-letter">▶</span><span className="pinterest">P</span><span className="social-letter">in</span></span><small>INDIVIDUALITY &nbsp;&nbsp; TRANSFORMATION &nbsp;&nbsp; ELEVATION<br /><br />© 2026 MELKORAA. All rights reserved.</small></div></footer>

      {cartOpen && <div className="modal-backdrop" onClick={() => setCartOpen(false)}><aside className="side-panel" onClick={(event) => event.stopPropagation()}><button className="panel-close" onClick={() => setCartOpen(false)}><X /></button><p className="eyebrow">YOUR BAG</p><h2>Your bag is empty.</h2><p>Discover pieces made for a higher tomorrow.</p><a className="button dark-button" href="#new-arrivals" onClick={() => setCartOpen(false)}>SHOP NEW ARRIVALS <ArrowRight size={15} /></a></aside></div>}
      {videoOpen && <div className="modal-backdrop" onClick={() => setVideoOpen(false)}><div className="story-modal" onClick={(event) => event.stopPropagation()}><button className="panel-close" onClick={() => setVideoOpen(false)}><X /></button><img src={image.hero} alt="MELKORAA story" /><div><p className="eyebrow">MELKORAA / OUR STORY</p><h2>Made for the ones moving forward.</h2><p>Clothing, community, and a higher tomorrow.</p></div></div></div>}
    </main>
  )
}
