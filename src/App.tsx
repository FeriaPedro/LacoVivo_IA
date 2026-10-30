import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router'
import { Menu, X } from 'lucide-react'
import lacoVivoLogo from './assets/laco-vivo-logo.png'
import { sources } from './data/content'
import { HomePage } from './pages/HomePage'
import { UnderstandPage } from './pages/UnderstandPage'
import { SignsPage } from './pages/SignsPage'
import { PreventionPage } from './pages/PreventionPage'
import { SupportPage } from './pages/SupportPage'
import './App.css'

const pages = [
  { path: '/', label: 'Início' },
  { path: '/entenda', label: 'Entenda' },
  { path: '/sinais-e-sintomas', label: 'Sinais e sintomas' },
  { path: '/prevencao', label: 'Prevenção' },
  { path: '/apoio', label: 'Apoio' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="header-inner page-container">
        <Link className="wordmark brand-lockup" to="/" aria-label="Laço Vivo — início">
          <img className="brand-logo" src={lacoVivoLogo} alt="Laço Vivo" />
          <span className="brand-name" aria-hidden="true">laço vivo<span aria-hidden="true">.</span></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Navegação principal"
        >
          {pages.map((page) => (
            <NavLink
              key={page.path}
              to={page.path}
              end={page.path === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {page.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-brand">
          <Link className="wordmark brand-lockup" to="/" aria-label="Laço Vivo — início">
            <img className="brand-logo" src={lacoVivoLogo} alt="Laço Vivo" />
            <span className="brand-name" aria-hidden="true">laço vivo<span aria-hidden="true">.</span></span>
          </Link>
          <p>Informação que acolhe. Prevenção que transforma.</p>
        </div>
        <nav className="footer-links" aria-label="Navegação do rodapé">
          {pages.map((page) => <Link key={page.path} to={page.path}>{page.label}</Link>)}
          <a href={sources.breastOverview.url}>INCA</a>
          <a href={sources.cancerCare.url}>Ministério da Saúde</a>
        </nav>
        <div className="footer-note">
          <p>Conteúdo educativo. Não substitui avaliação, diagnóstico ou orientação de profissionais de saúde.</p>
          <p>Fontes e informações verificadas em 30/10/2026.</p>
        </div>
      </div>
    </footer>
  )
}

function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Header />
      <main id="main-content" className="site-main">{children}</main>
      <Footer />
    </>
  )
}

function NotFoundPage() {
  return (
    <div className="content-page page-container">
      <header className="page-heading">
        <p className="eyebrow">LAÇO VIVO</p>
        <h1>Esta página não foi encontrada.</h1>
        <Link className="button button-primary" to="/">Voltar ao início</Link>
      </header>
    </div>
  )
}

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entenda" element={<UnderstandPage />} />
        <Route path="/sinais-e-sintomas" element={<SignsPage />} />
        <Route path="/prevencao" element={<PreventionPage />} />
        <Route path="/apoio" element={<SupportPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  )
}
