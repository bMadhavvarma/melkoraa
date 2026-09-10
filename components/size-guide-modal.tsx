'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, MessageCircle, Ruler, X } from 'lucide-react'
import { getSizeGuideKey, sizeGuides, type SizeGuide } from '@/lib/size-guides'
import type { Product } from '@/lib/catalog'

const categoryTabs = [['tshirts', 'T-SHIRTS'], ['hoodies', 'HOODIES'], ['shirts', 'SHIRTS'], ['cargos', 'CARGOS'], ['sweatshirts', 'SWEATSHIRTS']] as const

export function SizeGuideModal({ product, isOpen, onClose }: { product: Product; isOpen: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'measure' | 'chart'>('measure')
  const productKey = getSizeGuideKey(product)
  const [activeKey, setActiveKey] = useState(productKey)
  const guide = activeKey ? sizeGuides[activeKey] : null

  useEffect(() => { if (isOpen) { dialogRef.current?.focus(); document.body.style.overflow = 'hidden' } else document.body.style.overflow = '' ; return () => { document.body.style.overflow = '' } }, [isOpen])
  useEffect(() => { const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose(); document.addEventListener('keydown', onKeyDown); return () => document.removeEventListener('keydown', onKeyDown) }, [onClose])
  useEffect(() => { setActiveKey(productKey); setActiveTab('measure') }, [productKey])
  if (!isOpen || !guide) return null

  return <div className="size-guide-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><div className="size-guide-modal reference-size-modal" role="dialog" aria-modal="true" aria-labelledby="size-guide-title" tabIndex={-1} ref={dialogRef}>
    <button className="size-guide-close" onClick={onClose} aria-label="Close size guide"><X size={18} /></button>
    <nav className="size-guide-category-tabs" aria-label="Size guide categories">{categoryTabs.map(([key, label]) => <button key={key} className={activeKey === key ? 'active' : ''} onClick={() => { if (sizeGuides[key as keyof typeof sizeGuides]) setActiveKey(key as keyof typeof sizeGuides) }}>{label}</button>)}</nav>
    <div className="reference-size-layout"><section className="reference-measure-panel"><div className="reference-guide-tabs"><button className={activeTab === 'measure' ? 'active' : ''} onClick={() => setActiveTab('measure')}>HOW TO MEASURE</button><button className={activeTab === 'chart' ? 'active' : ''} onClick={() => setActiveTab('chart')}>MEASUREMENT GUIDE</button></div>{activeTab === 'measure' ? <><div className="reference-artwork">{activeKey === 'hoodies' ? <img src="/images/hoodie-size-guide.png" alt="Hoodie measurement diagram" /> : <GarmentDiagram guide={guide} />}</div><div className="reference-measure-notes">{guide.measurementCopy.slice(0, 4).map((item, index) => <div key={item.label}><b>{index + 1}</b><span><strong>{item.label}</strong>{item.copy}</span></div>)}</div></> : <div className="reference-measure-copy"><p className="eyebrow">MEASUREMENT GUIDE</p><h3>Find your best fit.</h3><p>Lay your favorite piece flat and compare each measurement to the chart. Measure without stretching the fabric.</p>{guide.measurementCopy.map((item) => <p key={item.label}><strong>{item.label}</strong> — {item.copy}</p>)}</div>}</section><section className="reference-chart-panel"><header className="reference-chart-heading"><div><p className="size-guide-label">{guide.title}</p><h2 id="size-guide-title">SIZE CHART</h2><i /></div><small>All measurements are in centimeters (cm).</small></header><div className="size-table-wrap"><table><thead><tr>{guide.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{guide.rows.map((row, index) => <tr key={`${row[0]}-${index}`}>{row.map((value, cellIndex) => <td key={`${value}-${cellIndex}`}>{value}</td>)}</tr>)}</tbody></table></div><div className="reference-bottom-grid"><div className="reference-fit-box"><p className="size-guide-label">FIT GUIDE</p><div>{Object.entries(guide.fit).map(([name, copy]) => <span className={name === 'Relaxed' ? 'active' : ''} key={name}><strong>{name.toUpperCase()}</strong>{copy}</span>)}</div><p className="reference-footnote">{guide.note}</p></div><div className="reference-support-box"><p className="size-guide-label">STILL UNSURE?</p><a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"><MessageCircle size={15} /><span><strong>Chat with us on WhatsApp</strong><small>Get size recommendations</small></span></a><a href="mailto:support@melkoraa.com"><Mail size={15} /><span><strong>Email our support team</strong><small>support@melkoraa.com</small></span></a><a href="#measurement"><Ruler size={15} /><span><strong>Check product measurements</strong><small>Available on each product page</small></span></a></div></div></section></div>
  </div></div>
}

function GarmentDiagram({ guide }: { guide: SizeGuide }) { return <div className="generic-garment-diagram"><div className="generic-garment-shape" /><span className="generic-line generic-shoulder">SHOULDER</span><span className="generic-line generic-chest">CHEST</span><span className="generic-line generic-length">LENGTH</span><span className="generic-line generic-sleeve">SLEEVE</span><small>{guide.title}</small></div> }
