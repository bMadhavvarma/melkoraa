'use client'

import Link from 'next/link'
import { ArrowRight, CircleUserRound, Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'

const assets = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%20page%20background-qhOLBViOo7lwbeiZ3BhsHj2K0vx5Mf.png',
  men: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/men%20wear%20image-ZE4azsdZieuW8sy82MmrLn2jOuz4bZ.png',
  women: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/men%20image%202-KAYkegWkvf0okglUvye9Dw4gi3an5E.png',
  kids: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kids%20image-dYjxCIMxILWzfmWOIo2yO16FZ36ge1.png',
  shirt: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t-shirt-MuGlewG9LStKMRbHxxjY18BZ1KeGXf.png',
  hoodie: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/huddy-RYRr5Gy5YQTm4lsP155KOzHfBeQcAt.png',
  cargo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pant-cnZ00YClo5IiQPOGiMJFgwX6wPAZVU.png',
  fabric: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shirt-NtQfK9HPoAoUQ9frA0TBHAxsMJAG1S.png',
  mountain: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer-UWiLcQASI4vXVWv6kHxFFNP3Ex1kEo.png',
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-J52C3j0NTF4XGXeEpoaYDiS2kWPkjT.png',
}

const cards = [
  ['MEN', 'STRENGTH\nIN SIMPLICITY', assets.men, 'men'],
  ['WOMEN', 'GRACE\nIN MOTION', assets.women, 'women'],
  ['KIDS', 'BIGGER\nTOMORROWS', assets.kids, 'kids'],
  ['T-SHIRTS', 'EVERYDAY ESSENTIALS', assets.shirt, 'tshirts'],
  ['HOODIES', 'COMFORT\nWITHOUT COMPROMISE', assets.hoodie, 'hoodies'],
  ['CARGOS', 'BUILT FOR\nMORE', assets.cargo, 'cargos'],
  ['ACCESSORIES', 'THE FINISHING\nTOUCH', assets.men, 'accessories'],
]

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (value: boolean) => void }) {
  return <>
    <div className="announcement"><span>A HIGHER TOMORROW</span><span>FREE SHIPPING ON ALL ORDERS ABOVE ₹1999</span><span>INDIA (₹) &nbsp; | &nbsp; STORES &nbsp; | &nbsp; TRACK ORDER</span></div>
    <header className="site-header"><button className="mobile-trigger" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={22} /></button><Link href="/" aria-label="MELKORAA home"><div className="brand-mark"><img src={assets.logo} alt="MELKORAA" /></div></Link><nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}><button className="mobile-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={22} /></button>{['Men', 'Women', 'Kids', 'Collections', 'Offers', 'About', 'Journal'].map((item) => <Link className={item === 'Collections' ? 'active-nav' : ''} key={item} href={item === 'Collections' ? '/collections' : '/'} onClick={() => setMenuOpen(false)}>{item}</Link>)}</nav><div className="header-actions"><button className="search-pill"><Search size={16} /><span>Search for products, collections...</span></button><button aria-label="Account"><CircleUserRound size={20} /></button><button aria-label="Wishlist"><Heart size={20} /></button><button aria-label="Shopping bag" className="bag-button"><ShoppingBag size={21} /><b>0</b></button></div></header>
  </>
}

function CollectionCard({ card, primary = false }: { card: string[]; primary?: boolean }) {
  const [title, subtitle, src, id] = card
  return <Link href={`/collections?category=${id}`} className={`collection-card ${primary ? 'primary-card' : ''}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.74), rgba(0,0,0,.12)), url("${src}")` }}><div><h2>{title}</h2><span className="collection-rule" /><p>{subtitle.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</p><span className="outline-link">{primary ? `EXPLORE ${title}` : 'VIEW COLLECTION'} <ArrowRight size={14} /></span></div></Link>
}

export default function MelkoraaCollections() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main className="collections-page"><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><section className="collections-hero"><img src={assets.hero} alt="MELKORAA model beside an architectural wall" /><div className="collections-hero-copy"><p className="eyebrow">EXPLORE</p><span className="small-rule" /><h1>OUR<br />COLLECTIONS</h1><p>Timeless pieces for a<br />bolder tomorrow.</p></div></section><section className="primary-collections">{cards.slice(0, 3).map((card) => <CollectionCard key={card[0]} card={card} primary />)}</section><section className="secondary-collections">{cards.slice(3).map((card) => <CollectionCard key={card[0]} card={card} />)}</section><section className="collections-editorial"><div className="fabric-editorial" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.8), rgba(0,0,0,.2)), url("${assets.fabric}")` }}><h2>MORE<br />THAN FABRIC</h2><span className="collection-rule" /><p>Premium materials.<br />Thoughtful details.<br />A higher tomorrow.</p></div><div className="mountain-editorial" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,244,225,.84), rgba(255,244,225,.08)), url("${assets.mountain}")` }}><div><h2>WEAR<br />A HIGHER<br />YOU</h2><span className="collection-rule" /></div><p>INDIVIDUALITY<br /><br />TRANSFORMATION<br /><br />ELEVATION</p></div></section><footer className="site-footer"><div className="footer-brand"><div className="brand-mark brand-mark-compact"><img src={assets.logo} alt="MELKORAA" /></div><p>A HIGHER TOMORROW</p></div><div><h3>SHOP</h3><Link href="/">Men</Link><Link href="/">Women</Link><Link href="/collections">Collections</Link></div><div><h3>ABOUT</h3><Link href="/">Our Story</Link><Link href="/">Sustainability</Link><Link href="/">Community</Link></div><div><h3>HELP</h3><Link href="/">Shipping</Link><Link href="/">Returns</Link><Link href="/">FAQs</Link></div><div className="social"><h3>FOLLOW US</h3><span className="social-letter">◎ &nbsp; ▶ &nbsp; P &nbsp; in</span><small>INDIVIDUALITY &nbsp;&nbsp; TRANSFORMATION &nbsp;&nbsp; ELEVATION<br /><br />© 2026 MELKORAA. All rights reserved.</small></div></footer></main>
}
