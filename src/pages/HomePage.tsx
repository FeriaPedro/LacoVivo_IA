import { useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import careIllustration from '../assets/Acolhimento-logo.png'

const topics = [
  { number: '01', title: 'Entenda', to: '/entenda' },
  { number: '02', title: 'Sinais e sintomas', to: '/sinais-e-sintomas' },
  { number: '03', title: 'Prevenção', to: '/prevencao' },
  { number: '04', title: 'Apoio', to: '/apoio' },
]

export function HomePage() {
  useEffect(() => {
    document.title = 'Início | Laço Vivo'
  }, [])

  return (
    <div className="home-page">
      <section className="documentary page-container" aria-label="Apresentação do documentário">
        <div className="documentary-frame">
          <video
            className="documentary-video"
            src="/videos/documentario-laco-vivo.mp4"
            controls
            preload="metadata"
            playsInline
          />
        </div>
      </section>

      <section className="home-intro page-container" aria-labelledby="home-title">
        <div className="home-copy">
          <p className="eyebrow">INFORMAÇÃO • CONSCIENTIZAÇÃO • CUIDADO</p>
          <h1 id="home-title">Conhecimento muda a forma de cuidar.</h1>
          <p className="home-slogan">Informação que acolhe. Prevenção que transforma.</p>
          <p>Conhecer o câncer de mama é um passo importante para entender os fatores de risco, reconhecer mudanças que merecem atenção e saber onde procurar orientação. O Laço Vivo reúne informação clara e fontes confiáveis para ajudar você a aprender e compartilhar conhecimento.</p>
          <p>Informação confiável ajuda a compreender a doença sem medo ou julgamentos. Aprender sobre prevenção, sinais de atenção e detecção precoce pode fazer diferença nas decisões de cuidado.</p>
          <div className="action-row">
            <Link className="button button-primary" to="/entenda">Explorar o conteúdo <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link className="text-link" to="/sinais-e-sintomas">Conhecer os sinais de atenção</Link>
          </div>
        </div>
        <img className="care-illustration" src={careIllustration} alt="Ilustração abstrata de acolhimento" />
      </section>

      <section className="explore-section page-container" aria-labelledby="explore-title">
        <div className="section-heading">
          <p className="eyebrow">LAÇO VIVO</p>
          <h2 id="explore-title">Explore o conteúdo</h2>
        </div>
        <div className="explore-grid">
          {topics.map((topic) => (
            <Link className="explore-card" key={topic.to} to={topic.to}>
              <span className="card-index">{topic.number}</span>
              <span className="card-title">{topic.title}</span>
              <ArrowUpRight className="card-arrow" size={19} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
