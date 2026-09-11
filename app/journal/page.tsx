import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import journalArticles from '@/lib/journal'

export default function JournalPage() { return <main className="content-page journal-page"><section className="page-intro"><p className="eyebrow">THE JOURNAL</p><h1>Ideas for a<br />higher everyday.</h1><p>Stories about clothing, craft, and choosing a little more intentionally.</p></section><section className="journal-grid">{journalArticles.map((article) => <Link href={`/journal/${article.slug}`} className="journal-card" key={article.slug}><img src={article.image} alt="" /><div><p className="eyebrow">{article.category} · {article.date}</p><h2>{article.title}</h2><p>{article.excerpt}</p><span className="text-link">READ STORY <ArrowRight size={14} /></span></div></Link>)}</section></main> }
