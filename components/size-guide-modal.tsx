'use client'

import { X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { getSizeGuideKey, sizeGuides } from '@/lib/size-guides'
import type { Product } from '@/lib/catalog'

export function SizeGuideModal({ product, isOpen, onClose }: { product: Product; isOpen: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const [tab, setTab] = useState<'measure' | 'chart'>('measure')
  const key = getSizeGuideKey(product)
  const guide = key ? sizeGuides[key] : null

  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKeyDown)
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKeyDown) }
  }, [isOpen, onClose])

  useEffect(() => { if (!isOpen) setTab('measure') }, [isOpen])
  if (!isOpen || !guide) return null

  return <div className="size-guide-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><div className="size-guide-modal" role="dialog" aria-modal="true" aria-labelledby="size-guide-title" tabIndex={-1} ref={dialogRef}>
    <button className="size-guide-close" onClick={onClose} aria-label="Close size guide"><X size={21} /></button>
    <header className="size-guide-header"><div><p className="eyebrow">MELKORAA / FIT NOTES</p><h2 id="size-guide-title">{guide.title}</h2><p className="size-guide-label">SIZE CHART</p></div><p>All measurements are in centimeters (cm).</p></header>
    <div className="size-guide-tabs"><button className={tab === 'measure' ? 'active' : ''} onClick={() => setTab('measure')}>HOW TO MEASURE</button><button className={tab === 'chart' ? 'active' : ''} onClick={() => setTab('chart')}>MEASUREMENT GUIDE</button></div>
    <div className="size-guide-content"><section className="size-guide-measure">{tab === 'measure' ? <><div className="garment-diagram" aria-label="Measurement diagram"><span className="garment-line shoulder">SHOULDER</span><span className="garment-line chest">CHEST</span><span className="garment-line length">LENGTH</span><span className="garment-line sleeve">SLEEVE</span><div className="garment-shape" /></div><div className="measurement-list">{guide.measurementCopy.map((item, index) => <div key={item.label}><b>{index + 1}</b><span><strong>{item.label}</strong>{item.copy}</span></div>)}</div></> : <div className="measurement-explanation"><p className="eyebrow">MEASUREMENT GUIDE</p><h3>Find your best fit.</h3><p>Lay your favorite piece flat and compare each measurement to the chart. Measure without stretching the fabric.</p>{guide.measurementCopy.map((item) => <p key={item.label}><strong>{item.label}</strong> — {item.copy}</p>)}</div>}</section><section className="size-guide-chart"><p className="eyebrow">{guide.title}</p><h3>SIZE CHART</h3><div className="size-table-wrap"><table><thead><tr>{guide.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{guide.rows.map((row) => <tr key={row[0]}>{row.map((value) => <td key={value}>{value}</td>)}</tr>)}</tbody></table></div><div className="fit-guide"><p className="eyebrow">FIT GUIDE</p><div>{Object.entries(guide.fit).map(([name, copy]) => <span className={product.id.includes('hoodie') && name === 'Oversized' ? 'active' : ''} key={name}><strong>{name.toUpperCase()}</strong>{copy}</span>)}</div></div><p className="size-guide-note">{guide.note}</p><div className="size-guide-support"><p className="eyebrow">STILL UNSURE?</p><a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">Chat with us on WhatsApp</a><a href="mailto:support@melkorraa.com">support@melkorraa.com</a><small>Need more help? Our team can recommend your best size.</small></div></section></div>
  </div></div>
}
