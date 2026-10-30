import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router'
import { contentReviewedOn, type OfficialSource } from '../data/content'

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = `${title} | Laço Vivo`
  }, [title])

  return (
    <header className="editorial-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="editorial-lede">{children}</div>
    </header>
  )
}

export function EditorialSection({
  id,
  number,
  eyebrow,
  title,
  children,
  className = '',
}: {
  id: string
  number?: string
  eyebrow?: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={`editorial-section ${className}`.trim()} id={id} aria-labelledby={`${id}-title`}>
      <div className="editorial-section-heading">
        {number && <span className="section-number">{number}</span>}
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
      </div>
      <div className="editorial-section-content">{children}</div>
    </section>
  )
}

export function NoteCard({ children, label = 'Para lembrar' }: { children: ReactNode; label?: string }) {
  return (
    <aside className="note-card">
      <span className="note-label">{label}</span>
      <p>{children}</p>
    </aside>
  )
}

export function SourceList({ sources, title = 'Fontes oficiais', id = 'official-sources' }: { sources: OfficialSource[]; title?: string; id?: string }) {
  return (
    <section className="source-list" aria-labelledby={`${id}-title`}>
      <div className="source-list-heading">
        <div>
          <p className="eyebrow">REFERÊNCIAS</p>
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        <span className="source-review-date">Verificadas em {contentReviewedOn}</span>
      </div>
      <ul>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url}>
              <span>{source.title}</span>
              <span className="source-organization">{source.organization}</span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function NextPageLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <div className="next-page-link">
      <Link className="button button-outline" to={to}>
        {children}<ArrowRight size={17} aria-hidden="true" />
      </Link>
    </div>
  )
}

export function TemporaryIllustration({ title, description, className = '' }: { title: string; description: string; className?: string }) {
  return (
    <div className={`temporary-illustration ${className}`.trim()} role="img" aria-label={`${title}. Ilustração temporária, arte final ainda não produzida.`}>
      <span className="temporary-illustration-mark" aria-hidden="true"><span /><span /><span /></span>
      <p className="temporary-illustration-title">{title}</p>
      <p className="temporary-illustration-description">{description}</p>
      <span className="temporary-badge">ILUSTRAÇÃO TEMPORÁRIA</span>
    </div>
  )
}

export function BulletList({ items }: { items: string[] }) {
  return <ul className="editorial-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
}
