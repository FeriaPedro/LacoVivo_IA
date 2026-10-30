import { Check, Activity, Utensils, WineOff, HeartHandshake, Baby } from 'lucide-react'
import { BulletList, EditorialSection, NextPageLink, NoteCard, PageHero, SourceList, TemporaryIllustration } from '../components/Editorial'
import { habitRelatedFactors, nonModifiableFactors, riskReductionActions, sources } from '../data/content'

const habitIcons = [Activity, Utensils, WineOff, HeartHandshake, Baby]

export function PreventionPage() {
  return (
    <article className="editorial-page page-container">
      <PageHero eyebrow="LAÇO VIVO / PREVENÇÃO" title="Cuidar também é conhecer os riscos.">
        <p>O câncer de mama não tem uma causa única. Algumas características estão associadas a uma chance maior de desenvolver a doença, enquanto certos hábitos podem ajudar a reduzir parte desse risco. Conhecer essas informações também ajuda a entender o papel da detecção precoce.</p>
      </PageHero>

      <EditorialSection id="fatores-de-risco" number="01" title="Fatores de risco: o que pode influenciar?">
        <div className="section-reading section-reading-wide">
          <p>Fator de risco é uma característica ou condição associada a uma chance maior de desenvolver uma doença. Ter um ou mais fatores não significa que a pessoa terá câncer de mama; não ter fatores conhecidos também não elimina totalmente a possibilidade.</p>
        </div>
        <div className="risk-groups">
          <section className="risk-card" aria-labelledby="nonmodifiable-title">
            <span className="card-index">GRUPO 01</span>
            <h3 id="nonmodifiable-title">Fatores que não podem ser modificados</h3>
            <BulletList items={nonModifiableFactors} />
          </section>
          <section className="risk-card" aria-labelledby="habit-risk-title">
            <span className="card-index">GRUPO 02</span>
            <h3 id="habit-risk-title">Fatores relacionados a hábitos e exposições</h3>
            <BulletList items={habitRelatedFactors} />
          </section>
        </div>
        <NoteCard>Fatores de risco não são uma previsão e não significam culpa. Eles ajudam a compreender o histórico e orientar conversas com profissionais de saúde.</NoteCard>
      </EditorialSection>

      <EditorialSection id="reduzir-risco" number="02" title="O que pode ajudar a reduzir o risco?" className="section-split habits-section">
        <div>
          <p>Algumas atitudes podem contribuir para reduzir o risco de câncer de mama:</p>
          <ul className="habit-list">
            {riskReductionActions.map((action, index) => {
              const Icon = habitIcons[index]
              return (
                <li key={action}>
                  <span className="habit-icon"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
                  <span>{action}</span>
                </li>
              )
            })}
          </ul>
          <p>Essas medidas podem reduzir o risco, mas não oferecem proteção total. O câncer de mama também pode ocorrer em pessoas com hábitos saudáveis.</p>
          <NoteCard label="Sem culpabilização">Não existe uma fórmula que elimine o risco. Hábitos saudáveis podem ajudar, mas não garantem que a doença não aconteça.</NoteCard>
        </div>
        <TemporaryIllustration title="Hábitos e fatores de risco" description="Ilustrações editoriais temporárias. A arte final ainda não foi produzida." className="illustration-habits" />
      </EditorialSection>

      <EditorialSection id="deteccao-precoce" number="03" title="O que significa detecção precoce?">
        <p className="section-intro">Detecção precoce é buscar identificar a doença em fase inicial. Ela envolve estratégias diferentes:</p>
        <div className="comparison-grid">
          <section className="comparison-card" aria-labelledby="diagnostico-precoce-title">
            <span className="card-index">QUANDO HÁ SINTOMAS</span>
            <h3 id="diagnostico-precoce-title">Diagnóstico precoce</h3>
            <p>Começa quando a pessoa percebe sinais ou sintomas e procura atendimento para investigar a alteração. Se houver uma mudança suspeita, procure uma UBS ou serviço de saúde sem esperar pela próxima mamografia de rotina.</p>
          </section>
          <section className="comparison-card" aria-labelledby="rastreamento-title">
            <span className="card-index">QUANDO NÃO HÁ SINTOMAS</span>
            <h3 id="rastreamento-title">Rastreamento</h3>
            <p>É a realização de exames em pessoas sem sinais ou sintomas, seguindo critérios de idade e periodicidade definidos pelas recomendações de saúde.</p>
          </section>
        </div>
        <p className="comparison-footnote">As duas estratégias são complementares, mas não são iguais.</p>
      </EditorialSection>

      <EditorialSection id="mamografia" number="04" title="Mamografia: para que serve e quando conversar sobre ela?" className="section-split mammography-section">
        <div className="section-reading">
          <p>A mamografia é uma radiografia das mamas feita com raios X. Ela pode identificar alterações antes que sejam percebidas no dia a dia e é o principal exame utilizado no rastreamento do câncer de mama.</p>
          <div className="mammography-guidance">
            <section>
              <span className="card-index">RECOMENDAÇÃO DE ROTINA • INCA</span>
              <h3>50 a 74 anos, a cada dois anos</h3>
              <p>O INCA recomenda mamografia a cada dois anos para mulheres de 50 a 74 anos, faixa em que o balanço entre benefícios e possíveis danos é considerado mais favorável pelas diretrizes citadas pelo Instituto.</p>
            </section>
            <section>
              <span className="card-index">ACESSO PELO SUS • COMUNICADO DE 29/10/2026</span>
              <h3>Faixa de acesso informada pelo Ministério da Saúde</h3>
              <p>Em comunicação publicada em 29 de outubro de 2026, o Ministério da Saúde informou acesso à mamografia pelo SUS para mulheres de 40 a 74 anos mesmo sem sintomas e para mulheres de qualquer idade quando houver indicação médica.</p>
            </section>
            <section>
              <span className="card-index">ACESSO POR DEMANDA • ORIENTAÇÃO PROFISSIONAL</span>
              <h3>Converse sobre benefícios e possíveis riscos</h3>
              <p>O INCA também informa que mulheres de 40 a 49 anos e acima de 74 podem conversar com a equipe sobre mamografia por demanda, após orientação sobre benefícios e possíveis riscos.</p>
            </section>
          </div>
          <p>Essas informações não significam que todas as pessoas devam fazer mamografia todos os anos. A idade, a frequência e a necessidade do exame devem ser conversadas com a equipe de saúde, considerando o histórico individual e as recomendações vigentes.</p>
          <p>A mamografia tem benefícios e limites. Pode gerar um resultado suspeito que depois não se confirma (falso positivo), deixar de identificar algumas alterações (falso negativo) ou encontrar alterações que talvez não causassem problemas durante a vida (sobrediagnóstico). A equipe de saúde pode explicar esses pontos.</p>
          <NoteCard label="Para lembrar">Mamografia não impede o aparecimento do câncer. Ela pode ajudar a detectá-lo mais cedo quando indicada.</NoteCard>
        </div>
        <TemporaryIllustration title="Mamografia" description="Ilustração temporária de equipamento. Não representa paciente, exame ou imagem diagnóstica." className="illustration-mammography" />
      </EditorialSection>
      <SourceList sources={[sources.riskFactors, sources.prevention, sources.earlyDetection, sources.breastOverview, sources.mammographyAccess]} />

      <EditorialSection id="o-que-levar" number="05" title="O que levar desta página?">
        <ul className="takeaway-list">
          <li><Check size={19} aria-hidden="true" /><span>Fatores de risco aumentam probabilidades, não determinam o futuro.</span></li>
          <li><Check size={19} aria-hidden="true" /><span>Hábitos saudáveis podem reduzir parte do risco, mas não o eliminam.</span></li>
          <li><Check size={19} aria-hidden="true" /><span>Diagnóstico precoce e rastreamento são estratégias diferentes.</span></li>
          <li><Check size={19} aria-hidden="true" /><span>A mamografia deve seguir orientação adequada à idade, ao histórico e à situação de cada pessoa.</span></li>
          <li><Check size={19} aria-hidden="true" /><span>Qualquer alteração suspeita merece avaliação, mesmo fora da faixa etária de rastreamento.</span></li>
        </ul>
      </EditorialSection>
      <NextPageLink to="/apoio">Encontrar apoio e orientação</NextPageLink>
    </article>
  )
}
