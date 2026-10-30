import { ArrowRight, Dna, CircleDot, Layers3 } from 'lucide-react'
import { breastCancerSections, sources } from '../data/content'
import { EditorialSection, NextPageLink, NoteCard, PageHero, SourceList, TemporaryIllustration } from '../components/Editorial'
import understandIllustration from '../assets/Entenda.jpg'

export function UnderstandPage() {
  return (
    <article className="editorial-page page-container">
      <PageHero eyebrow="LAÇO VIVO / ENTENDA" title="Entender é o primeiro passo para cuidar.">
        <p>O câncer de mama não é uma única doença: existem diferentes tipos, que podem se desenvolver de maneiras distintas. Conhecer o que acontece no corpo ajuda a compreender a importância da informação e da atenção à saúde.</p>
      </PageHero>

      <EditorialSection id="o-que-e" number={breastCancerSections[0].number} title={breastCancerSections[0].title} className="section-split">
        <div className="section-reading">
          {breastCancerSections[0].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <NoteCard>{breastCancerSections[0].note}</NoteCard>
        </div>
        <img className="understand-illustration" src={understandIllustration} alt="Ilustração abstrata de estruturas celulares em tons de rosa e champagne" />
      </EditorialSection>

      <EditorialSection id="como-acontece" number={breastCancerSections[1].number} title={breastCancerSections[1].title}>
        <div className="section-reading section-reading-wide">
          {breastCancerSections[1].paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="process-steps" aria-label="Resumo visual de como alterações podem levar à multiplicação desordenada de células">
          <div className="process-step">
            <span className="process-icon"><CircleDot size={23} aria-hidden="true" /></span>
            <span className="card-index">ETAPA 01</span>
            <h3>Crescimento celular</h3>
            <p>As células crescem, se dividem e são substituídas.</p>
          </div>
          <ArrowRight className="process-arrow" size={20} aria-hidden="true" />
          <div className="process-step">
            <span className="process-icon"><Dna size={23} aria-hidden="true" /></span>
            <span className="card-index">ETAPA 02</span>
            <h3>Alterações nas instruções</h3>
            <p>Algumas instruções guardadas no DNA podem sofrer alterações.</p>
          </div>
          <ArrowRight className="process-arrow" size={20} aria-hidden="true" />
          <div className="process-step">
            <span className="process-icon"><Layers3 size={23} aria-hidden="true" /></span>
            <span className="card-index">ETAPA 03</span>
            <h3>Multiplicação desordenada</h3>
            <p>Algumas células podem deixar de seguir os controles habituais.</p>
          </div>
        </div>
        <NoteCard label="Importante">{breastCancerSections[1].note}</NoteCard>
      </EditorialSection>

      <EditorialSection id="onde-comeca" number="03" title="Onde pode começar?" className="section-split anatomy-section">
        <div className="section-reading">
          <p>A mama é formada por diferentes tecidos. Entre eles estão os <strong>ductos</strong>, canais que conduzem o leite em direção ao mamilo, e os <strong>lóbulos</strong>, estruturas glandulares relacionadas à produção do leite.</p>
          <p>Muitos cânceres de mama começam nas células que revestem os ductos. Outros podem começar nos lóbulos. O local de origem ajuda a classificar o tipo de câncer.</p>
          <p className="anatomy-caption"><strong>Ductos</strong> — canais que conduzem o leite.<br /><strong>Lóbulos</strong> — estruturas glandulares que produzem o leite.</p>
        </div>
        <TemporaryIllustration title="Esquema educativo de ductos e lóbulos" description="Área reservada. O diagrama anatômico ainda não foi criado nem verificado." className="illustration-anatomy" />
      </EditorialSection>

      <EditorialSection id="quem-pode" number="04" title="Quem pode desenvolver?">
        <div className="inclusive-card">
          <span className="inclusive-accent" aria-hidden="true" />
          <div>
            <p>O câncer de mama é muito mais frequente em mulheres, mas também pode atingir homens. Os casos masculinos representam uma pequena parcela do total, mas não devem ser ignorados.</p>
            <p>A conscientização não deve ser limitada a um único público. Conhecer a doença é importante para todas as pessoas.</p>
            <p className="inclusive-emphasis">É menos comum em homens, mas pode acontecer. Informação também é cuidado.</p>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection id="por-que-conhecer" number="05" title="Por que conhecer é importante?">
        <div className="section-reading section-reading-wide">
          <p>Conhecer a doença ajuda a entender por que prestar atenção à saúde e buscar orientação diante de mudanças suspeitas é importante. Informação confiável também ajuda a conversar sobre o tema com menos preconceito, medo e desinformação.</p>
          <p>Esta página oferece uma visão geral. Ela não diagnostica uma condição individual nem substitui uma consulta. Se algo diferente for percebido no corpo, procure um serviço de saúde para avaliação.</p>
        </div>
      </EditorialSection>

      <SourceList sources={[sources.breastOverview]} />
      <NextPageLink to="/sinais-e-sintomas">Conhecer os sinais e sintomas</NextPageLink>
    </article>
  )
}
