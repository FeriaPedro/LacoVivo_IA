import { ArrowRight, ArrowUpRight, HeartHandshake, MapPin, Stethoscope } from 'lucide-react'
import { EditorialSection, NoteCard, PageHero, SourceList } from '../components/Editorial'
import { contentReviewedOn, sources, supportResources } from '../data/content'

const resourceDescriptions = [
  'Informações sobre como o SUS organiza avaliação, encaminhamento e tratamento oncológico.',
  'Informações e lista oficial de hospitais habilitados em oncologia.',
  'Materiais e orientações institucionais para pacientes e familiares.',
  'Informações gerais sobre direitos e benefícios, sujeitos a critérios específicos.',
  'Canal de informação e ouvidoria do SUS. Não substitui consulta médica nem atendimento de urgência.',
]

export function SupportPage() {
  return (
    <article className="editorial-page page-container">
      <PageHero eyebrow="LAÇO VIVO / APOIO E ACOLHIMENTO" title="Informação também é saber onde procurar ajuda.">
        <p>Se você percebeu uma mudança, recebeu um diagnóstico ou quer apoiar alguém, existem caminhos de cuidado. Conhecer os serviços disponíveis ajuda a transformar dúvidas em próximos passos.</p>
      </PageHero>

      <section className="start-care-callout" aria-labelledby="start-care-title">
        <div className="start-care-icon"><span className="section-number">01</span><MapPin size={25} strokeWidth={1.7} aria-hidden="true" /></div>
        <div>
          <p className="eyebrow">SISTEMA ÚNICO DE SAÚDE</p>
          <h2 id="start-care-title">Comece pela UBS</h2>
          <p>No Sistema Único de Saúde (SUS), a Unidade Básica de Saúde (UBS) é uma porta de entrada para orientação e avaliação. Procure a unidade de referência para conversar com a equipe, apresentar uma alteração percebida, esclarecer dúvidas e receber encaminhamento para exames ou atendimento especializado, quando necessário.</p>
          <p>O atendimento oncológico pelo SUS é gratuito. Não é necessário ter plano de saúde para buscar esse atendimento.</p>
          <p className="start-care-note">Não sabe por onde começar? Procure a UBS de referência. A equipe poderá orientar os próximos passos.</p>
        </div>
      </section>

      <EditorialSection id="rede-de-cuidado" number="02" title="Como funciona a rede de cuidado?">
        <p className="section-intro">O caminho pode variar conforme a avaliação clínica e a organização da rede de saúde de cada região. De forma geral:</p>
        <ol className="care-pathway" aria-label="Etapas gerais da rede de cuidado">
          <li>
            <span className="pathway-number">01</span>
            <span className="pathway-icon"><MapPin size={22} aria-hidden="true" /></span>
            <h3>UBS</h3>
            <p>Acolhimento, avaliação inicial e encaminhamento quando necessário.</p>
          </li>
          <li className="pathway-connector" aria-hidden="true"><ArrowRight size={22} /></li>
          <li>
            <span className="pathway-number">02</span>
            <span className="pathway-icon"><Stethoscope size={22} aria-hidden="true" /></span>
            <h3>Avaliação e exames especializados</h3>
            <p>Investigação diagnóstica e consultas conforme a situação.</p>
          </li>
          <li className="pathway-connector" aria-hidden="true"><ArrowRight size={22} /></li>
          <li>
            <span className="pathway-number">03</span>
            <span className="pathway-icon"><HeartHandshake size={22} aria-hidden="true" /></span>
            <h3>Serviço especializado em oncologia</h3>
            <p>Unidades habilitadas, como UNACON e CACON, realizam atendimento e tratamento especializado.</p>
          </li>
        </ol>
        <NoteCard label="Encaminhamento regional">A pessoa não precisa escolher sozinha uma UNACON ou um CACON. O encaminhamento segue a avaliação profissional e a rede de referência regional.</NoteCard>
        <SourceList id="care-sources" sources={[sources.cancerCare, sources.susCancerCare, sources.whereToTreat]} title="Entenda a rede pública de cuidado" />
      </EditorialSection>

      <EditorialSection id="apoio-tambem-cuida" number="03" title="O apoio também faz parte do cuidado">
        <div className="section-reading section-reading-wide">
          <p>O cuidado não envolve apenas exames e tratamentos. As necessidades emocionais, sociais e cotidianas também merecem atenção. Durante o acompanhamento, vale conversar com a equipe sobre recursos disponíveis na unidade ou na rede local, como apoio psicológico, serviço social, orientação nutricional ou reabilitação, conforme a necessidade e a disponibilidade.</p>
        </div>
        <NoteCard>Pedir orientação também é uma forma de cuidar de si.</NoteCard>
      </EditorialSection>

      <EditorialSection id="familia-e-amigos" number="04" title="Como familiares e amigos podem apoiar?">
        <div className="support-intro">
          <span className="support-symbol" aria-hidden="true"><HeartHandshake size={28} strokeWidth={1.6} /></span>
          <p>Nem sempre é preciso encontrar as palavras perfeitas. O apoio pode começar com escuta, respeito e disponibilidade.</p>
        </div>
        <ul className="support-list">
          <li>Pergunte como a pessoa gostaria de receber ajuda, em vez de decidir por ela.</li>
          <li>Escute sem julgamentos e respeite o tempo e as escolhas de quem está passando pelo tratamento.</li>
          <li>Ofereça companhia em consultas ou exames, se a pessoa desejar.</li>
          <li>Ajude a organizar perguntas para a equipe, horários ou tarefas do dia a dia, quando isso for bem-vindo.</li>
          <li>Respeite a privacidade e não compartilhe informações pessoais sem autorização.</li>
        </ul>
        <p className="section-reading section-reading-wide">Evite promessas de cura, comparações com outras histórias ou conselhos que substituam a orientação dos profissionais. Cada experiência é individual.</p>
      </EditorialSection>

      <EditorialSection id="fontes-e-canais" number="05" title="Onde encontrar informação confiável?">
        <p className="section-intro">Acesse os canais oficiais para consultar informações completas e atualizadas.</p>
        <div className="resource-grid">
          {supportResources.map((resource, index) => (
            <a className="resource-card" href={resource.url} key={resource.url}>
              <span className="card-index">{resource.organization}</span>
              <h3>{resource.title}</h3>
              <p>{resourceDescriptions[index]}</p>
              {index === 4 && <span className="resource-hours">Teleatendimento: segunda a sexta, 8h às 20h; sábado, 8h às 18h.</span>}
              <span className="resource-action">Acessar canal oficial <ArrowUpRight size={16} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
        <p className="resource-review-note">Horários e informações consultados em {contentReviewedOn}. O Disque Saúde 136 é um canal de informação e ouvidoria, não um serviço de urgência ou consulta médica.</p>
      </EditorialSection>

      <section className="support-closing" aria-labelledby="support-closing-title">
        <p className="eyebrow">LAÇO VIVO</p>
        <h2 id="support-closing-title">Informação orienta. Apoio fortalece.</h2>
        <p>Conhecer os caminhos de atendimento e contar com fontes confiáveis pode ajudar a enfrentar dúvidas com mais segurança. Se precisar de orientação sobre a própria saúde, procure uma UBS ou converse com a equipe que acompanha o caso.</p>
        <a className="text-link" href="#main-content">Voltar ao início da página <ArrowUpRight size={15} aria-hidden="true" /></a>
      </section>

      <SourceList id="support-sources" sources={[sources.cancerCare, sources.whereToTreat, sources.patientGuidance, sources.socialRights, sources.ouvidoria]} title="Fontes e canais oficiais" />
    </article>
  )
}
