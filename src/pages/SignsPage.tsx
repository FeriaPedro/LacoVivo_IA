import { Circle, CircleDot, Droplet, MoveDiagonal, ScanFace } from 'lucide-react'
import { NextPageLink, NoteCard, PageHero, SourceList, EditorialSection } from '../components/Editorial'
import { sources, symptoms } from '../data/content'

const symptomIcons = {
  nodule: CircleDot,
  skin: ScanFace,
  nipple: Circle,
  discharge: Droplet,
  shape: MoveDiagonal,
  nodes: CircleDot,
}

export function SignsPage() {
  return (
    <article className="editorial-page page-container">
      <PageHero eyebrow="LAÇO VIVO / SINAIS E SINTOMAS" title="Perceber mudanças importa.">
        <p>Conhecer as características habituais do próprio corpo pode ajudar a notar quando algo está diferente. Algumas alterações nas mamas merecem avaliação profissional, mas isso não significa que toda mudança seja câncer.</p>
      </PageHero>

      <EditorialSection id="o-que-observar" number="01" title="O que observar?">
        <p className="section-intro">Os sinais podem variar. Entre as alterações que merecem avaliação estão:</p>
        <div className="symptom-grid">
          {symptoms.map((symptom) => {
            const Icon = symptomIcons[symptom.icon as keyof typeof symptomIcons]
            return (
              <article className="symptom-card" key={symptom.title}>
                <span className="symptom-icon"><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></span>
                <div>
                  <h3>{symptom.title}</h3>
                  <p>{symptom.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </EditorialSection>

      <EditorialSection id="nem-toda-alteracao" number="02" title="Nem toda alteração significa câncer">
        <div className="section-reading section-reading-wide">
          <p>As mamas podem apresentar mudanças por diferentes motivos, e muitas alterações têm causas benignas. Um nódulo, uma dor ou uma mudança na pele não confirmam, por si só, a presença de câncer.</p>
          <p>O importante é não tentar descobrir a causa sozinho nem ignorar uma mudança nova ou persistente. A avaliação de um profissional de saúde ajuda a entender o que está acontecendo e se são necessários exames.</p>
        </div>
        <NoteCard label="Para lembrar">Um sinal não é um diagnóstico. Investigar é a melhor forma de esclarecer.</NoteCard>
      </EditorialSection>

      <section className="action-callout" aria-labelledby="when-to-seek-title">
        <div className="action-callout-heading">
          <span className="section-number">03</span>
          <p className="eyebrow">ORIENTAÇÃO</p>
          <h2 id="when-to-seek-title">Quando procurar atendimento?</h2>
        </div>
        <div className="action-callout-copy">
          <p>Ao perceber uma alteração nova, persistente ou suspeita nas mamas, procure uma Unidade Básica de Saúde (UBS) ou outro serviço de saúde. A equipe poderá fazer a avaliação inicial e orientar os próximos passos.</p>
          <p className="action-callout-emphasis">Não espere pela próxima mamografia de rotina se houver um sinal suspeito.</p>
          <p>A investigação de sintomas é diferente do rastreamento realizado em pessoas sem sinais ou sintomas. A avaliação de uma alteração pode ser necessária em qualquer idade, conforme orientação profissional.</p>
        </div>
      </section>

      <EditorialSection id="corpo" number="04" title="Conhecer o próprio corpo também importa">
        <div className="section-reading section-reading-wide">
          <p>Observar as mamas e perceber o que é habitual para o próprio corpo pode ajudar a notar mudanças. Essa atenção pode acontecer naturalmente no dia a dia, sem a obrigação de seguir uma técnica específica ou uma rotina fixa de autoexame.</p>
          <p>Conhecer o próprio corpo não substitui consultas, avaliação profissional ou exames indicados. Homens também devem procurar avaliação se perceberem alterações nas mamas.</p>
        </div>
      </EditorialSection>

      <EditorialSection id="informacao-faz-diferenca" number="05" title="Informação faz diferença">
        <div className="section-reading section-reading-wide">
          <p>Perceber uma mudança não significa que exista câncer, mas é um motivo válido para buscar orientação. Informação clara ajuda as pessoas a reconhecer quando é importante procurar um serviço de saúde.</p>
        </div>
      </EditorialSection>

      <SourceList sources={[sources.breastOverview, sources.earlyDetection]} />
      <NextPageLink to="/prevencao">Conhecer prevenção e detecção precoce</NextPageLink>
    </article>
  )
}
