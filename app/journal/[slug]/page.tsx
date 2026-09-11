import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getArticle } from '@/lib/journal'

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) { const article = getArticle((await params).slug); if (!article) notFound(); return <main className="content-page article-page"><Link href="/journal" className="back-link"><ArrowLeft size={14} /> BACK TO JOURNAL</Link><div className="article-header"><p className="eyebrow">{article.category} · {article.date}</p><h1>{article.title}</h1><p>{article.excerpt}</p></div><img className="article-image" src={article.image} alt="" /><article>{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article></main> }
