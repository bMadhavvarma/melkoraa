import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { assets } from '@/lib/catalog'

export default function AboutPage() {
  return <main className="content-page about-page"><header className="route-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.72), rgba(0,0,0,.08)), url('${assets.hero}')` }}><p className="eyebrow">OUR STORY</p><h1>WEAR A<br />HIGHER YOU.</h1><p>Clothing with clarity, character, and a point of view.</p></header><section className="copy-section"><p className="eyebrow">MELKORAA / 01</p><h2>We believe the everyday deserves more intention.</h2><p>MELKORAA is an independent clothing label for people who choose progress over ordinary. We make premium essentials that feel considered, not precious.</p><p>From the first sketch to the final stitch, every decision is made to create pieces that live well, move freely, and stay with you.</p></section><section className="manifesto-grid"><div><p className="eyebrow">OUR PURPOSE</p><h2>Better materials.<br />Better choices.<br />Better tomorrows.</h2></div><img src={assets.woman} alt="MELKORAA clothing in motion" /></section><section className="copy-section centered"><p className="eyebrow">FIND YOUR EVERYDAY</p><h2>Make room for what matters.</h2><Link href="/collections" className="button dark-button">EXPLORE COLLECTIONS <ArrowRight size={15} /></Link></section></main>
}
