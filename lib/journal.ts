export type JournalArticle = { slug: string; title: string; category: string; excerpt: string; date: string; image: string; body: string[] }

export const journalArticles: JournalArticle[] = [
  { slug: 'the-art-of-less', title: 'The Art of Less', category: 'PHILOSOPHY', excerpt: 'Why a considered wardrobe leaves more room for a considered life.', date: 'September 08, 2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-587GCnGn0IuK67MrURIrwB5KBChzBQ.png', body: ['The best pieces do not ask to be noticed. They make space for the person wearing them.', 'At MELKORAA, we edit with intention: thoughtful proportions, dependable fabrics, and details that reveal themselves over time.'] },
  { slug: 'made-for-movement', title: 'Made for Movement', category: 'CRAFT', excerpt: 'A closer look at the silhouettes that keep up with everyday life.', date: 'August 21, 2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V4okMJek2qyWMzy8jnkM1HkZwSCEqN.png', body: ['Clothing should move with you, not against you. Our latest layers are designed around real days and changing plans.', 'Every seam has a job. Every pocket is placed for a reason.'] },
  { slug: 'a-higher-tomorrow', title: 'A Higher Tomorrow', category: 'PURPOSE', excerpt: 'Small choices, made consistently, can shape a better future.', date: 'July 30, 2026', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sQal6f8Dt9h0nmWcmBrPCZhOarnGe0.png', body: ['Progress is not a finish line. It is the daily practice of making better choices.', 'We are building a brand that values longevity, responsible materials, and a community that looks forward.'] },
]

export const getArticle = (slug: string) => journalArticles.find((article) => article.slug === slug)

export const journalCategories = ['ALL', ...Array.from(new Set(journalArticles.map((article) => article.category)))]

export default journalArticles
