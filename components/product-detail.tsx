'use client'

import Link from 'next/link'
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Truck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { formatPrice, products, type Product } from '@/lib/catalog'
import { CartPanel } from '@/components/product-grid'
import { useStore } from '@/lib/store-context'

export function ProductDetail({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore()
  const gallery = product.gallery?.length ? product.gallery : [product.image]
  const [selectedImage, setSelectedImage] = useState(0)
  const [size, setSize] = useState(product.type === 'accessories' ? 'ONE SIZE' : 'M')
  const [color, setColor] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [tab, setTab] = useState<'details' | 'care'>('details')
  const wished = isWishlisted(product.id)
  const recommendations = useMemo(() => products.filter((item) => item.id !== product.id && (item.category === product.category || item.type === product.type)).slice(0, 4), [product])

  function addItem() {
    for (let index = 0; index < quantity; index += 1) addToCart(product, { size, color: product.colors[color] })
  }

  return <><main className="detail-page">
    <div className="detail-breadcrumb"><Link href="/collections">COLLECTIONS</Link><span>/</span><span>{product.name.toUpperCase()}</span></div>
    <section className="detail-layout">
      <div className="detail-gallery"><div className="detail-thumbs">{gallery.map((image, index) => <button key={image} className={selectedImage === index ? 'is-selected' : ''} onClick={() => setSelectedImage(index)} aria-label={`View image ${index + 1}`}><img src={image} alt="" /></button>)}</div><div className="detail-main-image"><img src={gallery[selectedImage]} alt={product.name} /></div></div>
      <div className="detail-info"><p className="eyebrow">MELKORAA / {product.category.toUpperCase()}</p><h1>{product.name}</h1><p className="detail-price">{formatPrice(product.price)}</p><p className="detail-description">{product.description}</p>
        <div className="detail-rule" />
        {product.type !== 'accessories' && <div className="detail-option"><div><b>SIZE</b><button className="size-guide" onClick={() => setTab('care')}>SIZE GUIDE</button></div><div className="size-grid">{['XS', 'S', 'M', 'L', 'XL'].map((option) => <button key={option} className={size === option ? 'selected' : ''} onClick={() => setSize(option)}>{option}</button>)}</div></div>}
        <div className="detail-option"><b>COLOR</b><div className="detail-colors">{product.colors.map((item, index) => <button key={item} className={color === index ? 'selected' : ''} style={{ backgroundColor: item }} onClick={() => setColor(index)} aria-label={`Select color ${index + 1}`} />)}</div></div>
        <div className="detail-actions"><div className="quantity"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={15} /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus size={15} /></button></div><button className="button dark-button add-detail" onClick={addItem}>ADD TO BAG <ShoppingBag size={16} /></button><button className={`detail-wishlist ${wished ? 'selected' : ''}`} onClick={() => toggleWishlist(product.id)} aria-label="Toggle wishlist"><Heart size={20} fill={wished ? 'currentColor' : 'none'} /></button></div>
        <div className="detail-shipping"><Truck size={18} /><span><b>COMPLIMENTARY SHIPPING</b><small>Free delivery on orders over ₹2,000.</small></span></div>
        <div className="detail-tabs"><button className={tab === 'details' ? 'active' : ''} onClick={() => setTab('details')}>PRODUCT DETAILS</button><button className={tab === 'care' ? 'active' : ''} onClick={() => setTab('care')}>{product.type === 'accessories' ? 'MATERIAL & CARE' : 'FIT & CARE'}</button></div><div className="detail-tab-copy">{tab === 'details' ? <p>Designed for daily movement with premium materials, an easy silhouette, and the considered details that make a piece last.</p> : <p>Our pieces are designed to feel true to size. Wash inside out on a gentle cycle and lay flat or hang to dry.</p>}</div>
      </div>
    </section>
    <section className="detail-recommendations"><div className="section-heading"><div><p className="eyebrow">YOU MAY ALSO LIKE</p><h2>Complete the look.</h2></div><Link href={`/collections/${product.category}`}>VIEW COLLECTION <ArrowLeft size={14} className="rotate-180" /></Link></div><div className="detail-recommendation-grid">{recommendations.map((item) => <Link href={`/product/${item.id}`} key={item.id}><img src={item.image} alt={item.name} /><p>{item.name}</p><b>{formatPrice(item.price)}</b></Link>)}</div></section>
  </main><CartPanel /></>
}

export function ProductNotFound() { return <main className="catalog-empty detail-not-found"><h1>Piece not found.</h1><p>Explore the collection to find your next essential.</p><Link className="button dark-button" href="/collections">EXPLORE COLLECTIONS</Link></main> }
