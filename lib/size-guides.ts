export type SizeGuideKey = 'hoodies' | 'tshirts' | 'shirts' | 'cargos' | 'kids-tshirts' | 'kids-hoodies'

export type SizeGuide = {
  title: string
  columns: string[]
  rows: string[][]
  note: string
  measurementCopy: { label: string; copy: string }[]
  fit: Record<string, string>
}

const adultRows = (values: number[][]) => values.map((row, index) => [['S', 'M', 'L', 'XL', 'XXL'][index], ...row.map(String)])

export const sizeGuides: Record<SizeGuideKey, SizeGuide> = {
  hoodies: { title: 'MELKORAA HOODIES', columns: ['SIZE', 'CHEST', 'SHOULDER', 'LENGTH', 'SLEEVE'], rows: adultRows([[112,54,68,61],[116,56,70,62],[120,58,72,63],[124,60,74,64],[128,62,76,65]]), note: 'Our hoodies are designed with a relaxed, oversized fit for maximum comfort and a modern look.', measurementCopy: [{ label: 'Chest', copy: 'Measure around the fullest part of your chest.' }, { label: 'Shoulder', copy: 'Measure from one shoulder seam to the other.' }, { label: 'Length', copy: 'Measure from the highest point of the shoulder to the hem.' }, { label: 'Sleeve', copy: 'Measure from the shoulder seam to the end of the sleeve.' }], fit: { Slim: 'A closer fit', Regular: 'A balanced fit', Relaxed: 'Room to move', Oversized: 'Our signature fit' } },
  tshirts: { title: 'MELKORAA T-SHIRTS', columns: ['SIZE', 'CHEST', 'SHOULDER', 'LENGTH'], rows: adultRows([[100,44,68],[104,46,70],[108,48,72],[112,50,74],[116,52,76]]).map((row) => row.slice(0, 4)), note: 'Our tees have a balanced everyday fit. Choose one size up for a relaxed silhouette.', measurementCopy: [{ label: 'Chest', copy: 'Measure around the fullest part of your chest.' }, { label: 'Shoulder', copy: 'Measure from shoulder seam to shoulder seam.' }, { label: 'Length', copy: 'Measure from the highest shoulder point to the hem.' }], fit: { Slim: 'A closer fit', Regular: 'A balanced fit', Relaxed: 'Room to move', Oversized: 'Our signature fit' } },
  shirts: { title: 'MELKORAA SHIRTS', columns: ['SIZE', 'CHEST', 'SHOULDER', 'LENGTH', 'SLEEVE'], rows: adultRows([[104,45,70,60],[108,47,72,61],[112,49,74,62],[116,51,76,63],[120,53,78,64]]), note: 'Shirts are designed for an easy, polished fit with room to layer.', measurementCopy: [{ label: 'Chest', copy: 'Measure around the fullest part of your chest.' }, { label: 'Shoulder', copy: 'Measure from shoulder seam to shoulder seam.' }, { label: 'Length', copy: 'Measure from the highest shoulder point to the hem.' }, { label: 'Sleeve', copy: 'Measure from the shoulder seam to the cuff.' }], fit: { Slim: 'A closer fit', Regular: 'A balanced fit', Relaxed: 'Room to move', Oversized: 'Our signature fit' } },
  cargos: { title: 'MELKORAA CARGOS', columns: ['SIZE', 'WAIST', 'HIP', 'LENGTH'], rows: [['S','76','100','102'],['M','80','104','104'],['L','84','108','106'],['XL','88','112','108']], note: 'Cargos are cut with a comfortable waist and a tapered leg.', measurementCopy: [{ label: 'Waist', copy: 'Measure around your natural waistline.' }, { label: 'Hip', copy: 'Measure around the fullest part of your hips.' }, { label: 'Length', copy: 'Measure from the waist to the hem.' }], fit: { Slim: 'A closer fit', Regular: 'A balanced fit', Relaxed: 'Room to move', Oversized: 'Our signature fit' } },
  'kids-tshirts': { title: 'MELKORAA KIDS T-SHIRTS', columns: ['SIZE', 'CHEST', 'LENGTH'], rows: [['2Y','58','40'],['4Y','62','44'],['6Y','66','48'],['8Y','70','52'],['10Y','74','56']], note: 'Designed for play, movement, and growing room.', measurementCopy: [{ label: 'Chest', copy: 'Measure around the fullest part of the chest.' }, { label: 'Length', copy: 'Measure from the shoulder to the hem.' }], fit: { Slim: 'A closer fit', Regular: 'A balanced fit', Relaxed: 'Room to move', Oversized: 'Extra room to play' } },
  'kids-hoodies': { title: 'MELKORAA KIDS HOODIES', columns: ['SIZE', 'CHEST', 'LENGTH', 'SLEEVE'], rows: [['2Y','62','42','34'],['4Y','66','46','38'],['6Y','70','50','42'],['8Y','74','54','46'],['10Y','78','58','50']], note: 'Soft layers with comfortable room for every small adventure.', measurementCopy: [{ label: 'Chest', copy: 'Measure around the fullest part of the chest.' }, { label: 'Length', copy: 'Measure from the shoulder to the hem.' }, { label: 'Sleeve', copy: 'Measure from shoulder seam to cuff.' }], fit: { Slim: 'A closer fit', Regular: 'A balanced fit', Relaxed: 'Room to move', Oversized: 'Extra room to play' } },
}

export function getSizeGuideKey(product: { type: string; category: string }): SizeGuideKey | null {
  if (product.type === 'accessories') return null
  if (product.category === 'kids') return product.type === 'hoodies' ? 'kids-hoodies' : 'kids-tshirts'
  return product.type === 'hoodies' || product.type === 'tshirts' || product.type === 'shirts' || product.type === 'cargos' ? product.type : 'shirts'
}
