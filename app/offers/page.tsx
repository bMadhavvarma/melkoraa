'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowRight, Bell, Copy, CreditCard, Gift, GraduationCap, Tag } from 'lucide-react'
import { assets } from '@/lib/catalog'

type OfferCategory = 'all' | 'seasonal' | 'bank' | 'combo' | 'student'
type Offer = { id: string; category: Exclude<OfferCategory, 'all'>; size: 'large' | 'small'; title: string; discount: string; description: string; image: string; route?: string; cta: string; note: string }

const offers: Offer[] = [
  { id: 'layering', category: 'seasonal', size: 'large', title: 'SEASON OF LAYERING', discount: '40% OFF', description: 'On Selected Hoodies & Sweatshirts', image: assets.hoodie, route: '/collections/hoodies', cta: 'SHOP NOW', note: 'WARMER DAYS. HIGHER PLANS.' },
  { id: 'bundle', category: 'combo', size: 'large', title: 'BUY MORE\nSAVE MORE', discount: 'BUY 2  GET 10% OFF\nBUY 3  GET 15% OFF\nBUY 4+ GET 20% OFF', description: 'More good for more journeys.', image: assets.hero, route: '/collections', cta: 'SHOP NOW', note: 'MORE GOOD FOR MORE JOURNEYS.' },
  { id: 'student', category: 'student', size: 'small', title: 'STUDENT DISCOUNT', discount: '15% OFF', description: 'Verify with Student ID', image: assets.boy, cta: 'GET OFFER', note: 'LEARN. EXPLORE. GROW. A HIGHER YOU.' },
  { id: 'first', category: 'combo', size: 'small', title: 'FIRST ORDER OFFER', discount: '10% OFF', description: 'On your first purchase', image: assets.men, route: '/collections', cta: 'SHOP NOW', note: 'NEW HERE. A HIGHER TOMORROW.' },
  { id: 'festive', category: 'seasonal', size: 'small', title: 'FESTIVE SPECIAL', discount: 'UP TO 50% OFF', description: 'On Selected Styles', image: assets.woman, route: '/collections', cta: 'SHOP NOW', note: 'CELEBRATE BIGGER JOURNEYS.' },
]

const benefits = [
  [Tag, 'EXCLUSIVE OFFERS', 'Only on MELKORAA'], [Gift, 'COMBO DEALS', 'More good. More savings.'], [CreditCard, 'BANK OFFERS', 'Extra savings with top banks'], [GraduationCap, 'STUDENT DISCOUNTS', 'For the next generation'], [Bell, 'LIMITED TIME DEALS', "Don't miss out"],
]

export default function OffersPage() {
  const [category, setCategory] = useState<OfferCategory>('all')
  const [studentOpen, setStudentOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const visible = useMemo(() => category === 'all' ? offers : offers.filter((offer) => offer.category === category), [category])
  const large = visible.filter((offer) => offer.size === 'large')
  const small = visible.filter((offer) => offer.size === 'small')
  const copyCode = async () => { try { await navigator.clipboard.writeText('FIRST10') } catch { const input = document.createElement('input'); input.value = 'FIRST10'; document.body.appendChild(input); input.select(); document.execCommand('copy'); input.remove() } setCopied(true); window.setTimeout(() => setCopied(false), 1800) }
  const subscribe = (event: React.FormEvent) => { event.preventDefault(); if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setSubscribed(true) }
  return <main className="offers-page">
    <section className="offers-reference-hero"><img src={assets.hero} alt="MELKORAA model wearing a hoodie against warm architecture" /><div className="offers-reference-hero-copy"><p className="eyebrow">OFFERS</p><span className="small-rule" /><h1>MORE<br />FOR YOUR<br />JOURNEY.</h1><p>Better gear. Bolder adventures.</p></div><div className="offers-hero-note"><span>INDIVIDUALITY</span><span>TRANSFORMATION</span><span>ELEVATION</span><i /><span>CLOTHING</span><span>A HIGHER TOMORROW</span></div></section>
    <nav className="offer-tabs" aria-label="Offer categories">{[['all','ALL OFFERS'],['seasonal','SEASONAL'],['bank','BANK OFFERS'],['combo','COMBO DEALS'],['student','STUDENT DISCOUNTS']].map(([value, label]) => <button key={value} type="button" className={category === value ? 'active' : ''} onClick={() => setCategory(value as OfferCategory)} aria-pressed={category === value}>{label}</button>)}</nav>
    <section className="offer-grid" aria-live="polite"><div className="offer-feature-row">{large.map((offer) => <OfferCard key={offer.id} offer={offer} onStudent={() => setStudentOpen(true)} />)}</div><div className="offer-small-row">{small.map((offer) => <OfferCard key={offer.id} offer={offer} onStudent={() => setStudentOpen(true)} />)}</div></section>
    {category === 'all' && <section className="offer-benefits">{benefits.map(([Icon, title, text]) => <div key={title}><Icon /><span><b>{title}</b><small>{text}</small></span></div>)}</section>}
    <section className="offers-subscribe"><div><p className="eyebrow">STAY AHEAD</p><h2>GET EXCLUSIVE OFFERS.</h2><p>Be the first to know about new drops, member-only deals and more.</p></div><form onSubmit={subscribe}><label className="sr-only" htmlFor="offers-email">Email address</label><input id="offers-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email address" required /><button type="submit">SUBSCRIBE <ArrowRight /></button>{subscribed && <small>YOU&apos;RE ON THE LIST.</small>}</form></section>
    {studentOpen && <div className="offer-modal-backdrop" role="presentation" onClick={() => setStudentOpen(false)}><section className="offer-modal" role="dialog" aria-modal="true" aria-labelledby="student-title" onClick={(event) => event.stopPropagation()}><button type="button" className="offer-modal-close" onClick={() => setStudentOpen(false)} aria-label="Close">×</button><p className="eyebrow">STUDENT DISCOUNT</p><h2 id="student-title">A little more<br />for your journey.</h2><p>Show your valid student ID at checkout to claim 15% off selected styles.</p><button type="button" className="button dark-button" onClick={() => setStudentOpen(false)}>GOT IT</button></section></div>}
  </main>
}

function OfferCard({ offer, onStudent }: { offer: Offer; onStudent: () => void }) { const content = <><div className="offer-card-image"><img src={offer.image} alt="" /></div><div className="offer-card-shade" /><div className="offer-card-copy"><h2>{offer.title.split('\n').map((line) => <span key={line}>{line}</span>)}</h2><span className="small-rule" /><p className="offer-discount">{offer.discount.split('\n').map((line) => <span key={line}>{line}</span>)}</p><p>{offer.description}</p>{offer.id === 'first' && <div className="offer-code">USE CODE <strong>FIRST10</strong><button type="button" onClick={(event) => { event.preventDefault(); event.stopPropagation(); navigator.clipboard?.writeText('FIRST10') }} aria-label="Copy FIRST10"><Copy /></button></div>}<span className="button light-button">{offer.cta} <ArrowRight /></span></div><small className="offer-card-note">{offer.note}</small></>; return offer.id === 'student' ? <article className={`offer-card ${offer.size}`} onClick={onStudent}>{content}</article> : <Link href={offer.route ?? '#'} className={`offer-card ${offer.size}`}>{content}</Link> }
