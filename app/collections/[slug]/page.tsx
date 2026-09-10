import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { collectionMeta, isCollectionSlug, productsForCollection } from '@/lib/catalog'
import { ProductGrid, CartPanel } from '@/components/product-grid'

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!isCollectionSlug(slug)) notFound()
  const collection = collectionMeta[slug]
  return <main className="collection-route"><header className="collection-route-header"><Link href="/" className="route-logo"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-J52C3j0NTF4XGXeEpoaYDiS2kWPkjT.png" alt="MELKORAA" /></Link><nav><Link href="/collections">All collections</Link><Link href="/collections/men">Men</Link><Link href="/collections/women">Women</Link><Link href="/collections/kids">Kids</Link></nav><Link className="route-back" href="/collections"><ArrowLeft size={15} /> Back to collections</Link></header><section className="collection-route-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(12,12,10,.72), rgba(12,12,10,.15)), url("${collection.image}")` }}><div><p className="eyebrow">MELKORAA / COLLECTION</p><span className="small-rule" /><h1>{collection.title}</h1><p>{collection.subtitle}</p></div></section><div className="collection-route-intro"><p>CURATED FOR YOUR HIGHER TOMORROW</p><h2>Pieces with purpose.</h2><Link href="/collections">VIEW ALL COLLECTIONS <ArrowRight size={15} /></Link></div><ProductGrid products={productsForCollection(slug)} /><CartPanel /></main>
}
