export type CollectionSlug = 'men' | 'women' | 'kids' | 'tshirts' | 'hoodies' | 'cargos' | 'accessories'

export type Product = {
  id: string
  name: string
  price: number
  image: string
  category: CollectionSlug
  type: 'tshirts' | 'hoodies' | 'cargos' | 'accessories' | 'shirts'
  badge?: string
  description: string
  colors: string[]
  gallery?: string[]
}

export const assets = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%20page%20background-XaeYSkL4W83ZDFT3VW9U9ra3ujCRtL.png',
  men: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/men%20wear%20image-ZE4azsdZieuW8sy82MmrLn2jOuz4bZ.png',
  women: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/men%20image%202-KAYkegWkvf0okglUvye9Dw4gi3an5E.png',
  kids: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kids%20image-dYjxCIMxILWzfmWOIo2yO16FZ36ge1.png',
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO-J52C3j0NTF4XGXeEpoaYDiS2kWPkjT.png',
  shirt: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-587GCnGn0IuK67MrURIrwB5KBChzBQ.png',
  hoodie: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V4okMJek2qyWMzy8jnkM1HkZwSCEqN.png',
  cargo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sQal6f8Dt9h0nmWcmBrPCZhOarnGe0.png',
  accessory: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dwrkBWDfk0bVDCuzXZb6k5VWDDYpCZ.png',
  bracelet: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sg49pjUdoFxW5nqwc6n7OvUiqrrbUi.png',
  woman: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LE8Z1zI8AWXQYe7wR794DkRij48Oen.png',
  boy: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vnwKG7ZipM8dZ14F1psW2dPR00bbmz.png',
  girl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pu8pSIB2ZyoLm5AVyRe3cVe2Qd4Eii.png',
  stripedBoy: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-08lcnnFiOFwzJ4VtVunpkWMUBmzyBI.png',
  overshirt: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kqzKqRn60pCaxQ0oVhhuT0NLBB7kg7.png',
  pink: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CzaCjmazBqOX3J6Yi9y7cZTk580x0X.png',
  cap: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-77l87O3tm3A9NzZbaHXgk8Rs01UuNa.png',
  graphicTee: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NCAcKq9mqnLtuqslLmcaubTTSF8NOD.png',
  pinkTee: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CzaCjmazBqOX3J6Yi9y7cZTk580x0X.png',
}

export const products: Product[] = [
  { id: 'signature-shirt', name: 'Signature Shirt', price: 2199, image: assets.shirt, category: 'men', type: 'shirts', badge: 'NEW', description: 'A relaxed everyday shirt with a considered silhouette.', colors: ['#1a1a18', '#d9d2c5'], gallery: [assets.shirt, assets.overshirt, assets.pink] },
  { id: 'everyday-hoodie', name: 'Everyday Hoodie', price: 1999, image: assets.hoodie, category: 'hoodies', type: 'hoodies', badge: 'NEW', description: 'Soft structure and easy layers for everyday movement.', colors: ['#9aaebe', '#1a1a18'], gallery: [assets.hoodie, assets.hero, assets.shirt] },
  { id: 'urban-cargo', name: 'Urban Cargo', price: 2499, image: assets.cargo, category: 'cargos', type: 'cargos', description: 'Built for more with a utilitarian, tapered fit.', colors: ['#222222', '#887b69'] },
  { id: 'the-finishing-cap', name: 'The Finishing Cap', price: 899, image: assets.cap, category: 'accessories', type: 'accessories', description: 'A graphic cotton cap that finishes the look.', colors: ['#141414', '#d8d3c7'] },
  { id: 'classic-bracelet', name: 'Classic Loop Bracelet', price: 1299, image: assets.bracelet, category: 'accessories', type: 'accessories', description: 'A tactile leather accessory with a signature clasp.', colors: ['#151515'] },
  { id: 'soft-pink-shirt', name: 'Soft Stripe Shirt', price: 1899, image: assets.pink, category: 'women', type: 'shirts', description: 'A light, polished stripe for sunlit days.', colors: ['#e7b6c7', '#ffffff'] },
  { id: 'statement-set', name: 'Statement Set', price: 3299, image: assets.woman, category: 'women', type: 'shirts', badge: 'EDIT', description: 'Tailoring with a confident, colorful point of view.', colors: ['#c9a995'] },
  { id: 'little-boss-set', name: 'Little Boss Set', price: 1599, image: assets.boy, category: 'kids', type: 'hoodies', description: 'Play-ready layers with a little more character.', colors: ['#d8c8b7', '#151515'] },
  { id: 'garden-set', name: 'Garden Play Set', price: 1799, image: assets.girl, category: 'kids', type: 'shirts', description: 'A joyful printed set made for bigger tomorrows.', colors: ['#18765f'] },
  { id: 'better-days-set', name: 'Better Days Set', price: 1499, image: assets.stripedBoy, category: 'kids', type: 'shirts', description: 'Colorful comfort for every small adventure.', colors: ['#d9bf9f', '#6f8f72'] },
  { id: 'clean-overshirt', name: 'Clean Overshirt', price: 2299, image: assets.overshirt, category: 'men', type: 'shirts', description: 'A crisp overshirt with effortless warm-weather ease.', colors: ['#f5f5f2'] },
  { id: 'core-tee', name: 'Core Tee', price: 1299, image: assets.graphicTee, category: 'tshirts', type: 'tshirts', description: 'The everyday tee, refined through fit and fabric.', colors: ['#1a1a18', '#dedbd4', '#85827d'] },
  { id: 'resort-graphic-tee', name: 'Resort Graphic Tee', price: 1699, image: assets.graphicTee, category: 'tshirts', type: 'tshirts', badge: 'NEW', description: 'A statement short-sleeve shirt with a bold signature print.', colors: ['#d3a93e', '#151515'] },
  { id: 'pink-everyday-tee', name: 'Everyday Stripe Tee', price: 1399, image: assets.pinkTee, category: 'tshirts', type: 'tshirts', description: 'A soft striped layer for easy everyday styling.', colors: ['#e7b6c7', '#f2eee7'] },
  { id: 'contrast-hoodie', name: 'Contrast Hoodie', price: 2099, image: assets.hoodie, category: 'tshirts', type: 'hoodies', description: 'A short-sleeve hoodie layer with graphic contrast.', colors: ['#8ba9bb', '#f5f5f0'] },
]

export const collectionMeta: Record<CollectionSlug, { title: string; subtitle: string; image: string }> = {
  men: { title: 'MEN', subtitle: 'Strength in simplicity.', image: assets.men },
  women: { title: 'WOMEN', subtitle: 'Grace in motion.', image: assets.woman },
  kids: { title: 'KIDS', subtitle: 'Bigger tomorrows.', image: assets.kids },
  tshirts: { title: 'T-SHIRTS', subtitle: 'Everyday essentials.', image: assets.shirt },
  hoodies: { title: 'HOODIES', subtitle: 'Comfort without compromise.', image: assets.hoodie },
  cargos: { title: 'CARGOS', subtitle: 'Built for more.', image: assets.cargo },
  accessories: { title: 'ACCESSORIES', subtitle: 'The finishing touch.', image: assets.accessory },
}

export function productsForCollection(slug: CollectionSlug) {
  return products.filter((product) => product.category === slug || product.type === slug)
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)
}

export function isCollectionSlug(value: string): value is CollectionSlug {
  return value in collectionMeta
}
