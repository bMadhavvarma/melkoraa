import Link from 'next/link'
import { ArrowRight, Check, Gift, Truck, Users } from 'lucide-react'
import { assets, products } from '@/lib/catalog'
import { ProductGrid } from '@/components/product-grid'

export default function OffersPage() {
  const offerProducts = products.filter((product) => product.badge || product.price < 1800).slice(0, 6)

  return (
    <main className="offers-page">
      <section className="offers-hero">
        <img src={assets.hero} alt="MELKORAA essentials in a mountain landscape" />
        <div className="offers-hero-copy">
          <p className="eyebrow">A HIGHER TOMORROW / SPECIAL EDIT</p>
          <span className="small-rule" />
          <h1>Good style<br />travels further.</h1>
          <p>Considered pieces. Better prices.<br />Make room for what moves you.</p>
          <Link href="#offer-edit" className="button dark-button">EXPLORE THE EDIT <ArrowRight size={15} /></Link>
        </div>
        <div className="offers-hero-note"><span>INDIVIDUALITY</span><span>TRANSFORMATION</span><span>ELEVATION</span></div>
      </section>

      <section className="offers-intro" id="offer-edit">
        <div><p className="eyebrow">THE MELKORAA EDIT</p><h2>More considered.<br />A little easier.</h2></div>
        <div className="offers-intro-copy"><p>Make space for the pieces you will reach for every day. Enjoy complimentary shipping on orders above ₹1,999, plus special pricing across our essential edits.</p><Link href="/collections" className="text-link">SHOP ALL COLLECTIONS <ArrowRight size={14} /></Link></div>
      </section>

      <section className="offers-perks" aria-label="Offer benefits">
        <div><Truck /><span><b>FREE SHIPPING</b>On orders above ₹1,999</span></div>
        <div><Gift /><span><b>THE MORE YOU TAKE</b>Special prices on edits</span></div>
        <div><Users /><span><b>EARLY ACCESS</b>For the MELKORAA community</span></div>
      </section>

      <section className="offers-feature">
        <div className="offers-feature-image"><img src={assets.woman} alt="MELKORAA statement set" /></div>
        <div className="offers-feature-copy"><p className="eyebrow">LIMITED-TIME EDIT</p><h2>Everyday,<br />elevated.</h2><p>Build a wardrobe with room to move. Selected pieces from our latest collections are now available at considered prices.</p><ul><li><Check size={15} /> Premium materials, made to last</li><li><Check size={15} /> Easy silhouettes for every day</li><li><Check size={15} /> Complimentary delivery over ₹1,999</li></ul><Link href="/collections" className="button dark-button">SHOP THE EDIT <ArrowRight size={15} /></Link></div>
      </section>

      <section className="offers-products"><div className="section-heading"><div><p className="eyebrow">SELECTED FOR YOU</p><p>Pieces worth making room for.</p></div><Link href="/collections">VIEW ALL <ArrowRight size={15} /></Link></div><ProductGrid products={offerProducts} /></section>

      <section className="offers-close" style={{ backgroundImage: `linear-gradient(90deg, rgba(10,10,10,.9), rgba(10,10,10,.42)), url("${assets.hero}")` }}><p className="eyebrow">GOOD THINGS TRAVEL FAR.</p><h2>Wear a higher you.</h2><Link href="/collections" className="button light-button">EXPLORE NEW ARRIVALS <ArrowRight size={15} /></Link></section>
    </main>
  )
}
