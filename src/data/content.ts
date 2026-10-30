export const contentReviewedOn = '30 de outubro de 2026'

export type OfficialSource = {
  title: string
  url: string
  organization: string
}

export const sources = {
  breastOverview: {
    title: 'Versão para população: câncer de mama',
    organization: 'Instituto Nacional de Câncer (INCA)',
    url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/mama/versao-para-populacao',
  },
  riskFactors: {
    title: 'Fatores de risco',
    organization: 'Instituto Nacional de Câncer (INCA)',
    url: 'https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/fatores-de-risco',
  },
  prevention: {
    title: 'Prevenção',
    organization: 'Instituto Nacional de Câncer (INCA)',
    url: 'https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/acoes/prevencao',
  },
  earlyDetection: {
    title: 'Detecção precoce',
    organization: 'Instituto Nacional de Câncer (INCA)',
    url: 'https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/acoes/deteccao-precoce',
  },
  mammographyAccess: {
    title: 'SUS amplia acesso à mamografia e ao tratamento do câncer de mama (29/10/2026)',
    organization: 'Ministério da Saúde',
    url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/2026/outubro/sus-amplia-acesso-a-mamografia-e-ao-tratamento-do-cancer-de-mama/',
  },
  cancerCare: {
    title: 'Atenção ao Câncer',
    organization: 'Ministério da Saúde',
    url: 'https://www.gov.br/saude/pt-br/composicao/saes/atencao-ao-cancer/atencao-ao-cancer',
  },
  susCancerCare: {
    title: 'Quem tem câncer pode ser atendido pelo SUS?',
    organization: 'Ministério da Saúde',
    url: 'https://www.gov.br/saude/pt-br/composicao/saes/atencao-ao-cancer/faq/faq/quem-tem-cancer-pode-ser',
  },
  whereToTreat: {
    title: 'Onde tratar pelo SUS',
    organization: 'Instituto Nacional de Câncer (INCA)',
    url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/tratamento/onde-tratar-pelo-sus',
  },
  patientGuidance: {
    title: 'Orientações aos pacientes e familiares',
    organization: 'Instituto Nacional de Câncer (INCA)',
    url: 'https://www.gov.br/inca/pt-br/assuntos/cancer/orientacoes-aos-pacientes-e-familiares',
  },
  socialRights: {
    title: 'Direitos sociais da pessoa com câncer',
    organization: 'Instituto Nacional de Câncer (INCA)',
    url: 'https://www.gov.br/inca/pt-br/acesso-a-informacao/perguntas-frequentes/direitos-sociais-da-pessoa-com-cancer',
  },
  ouvidoria: {
    title: 'Ouvidoria-Geral do SUS — Disque Saúde 136',
    organization: 'Ministério da Saúde',
    url: 'https://www.gov.br/saude/pt-br/canais-de-atendimento/ouvsus',
  },
} satisfies Record<string, OfficialSource>

export const breastCancerSections = [
  {
    number: '01',
    title: 'O que é o câncer de mama?',
    paragraphs: [
      'O câncer de mama acontece quando algumas células do tecido mamário sofrem alterações e passam a se multiplicar de maneira desordenada. Esse crescimento pode formar um tumor maligno, que tem capacidade de invadir tecidos próximos e, em alguns casos, alcançar outras partes do corpo.',
      'Existem diferentes tipos de câncer de mama. Por isso, o comportamento e a velocidade de desenvolvimento podem variar de uma pessoa para outra.',
    ],
    note: 'Cada caso tem suas características. Informação de qualidade ajuda a entender a doença sem simplificações ou julgamentos.',
  },
  {
    number: '02',
    title: 'Como isso acontece?',
    paragraphs: [
      'O corpo é formado por células que crescem, se dividem e são substituídas. Esse processo é orientado por instruções guardadas no DNA.',
      'Quando algumas dessas instruções sofrem alterações, as células podem deixar de seguir os controles habituais e começar a se multiplicar de forma desordenada. O acúmulo dessas células pode dar origem a um tumor.',
      'Esse processo é complexo e não tem uma única explicação para todos os casos. Diferentes fatores podem estar envolvidos.',
    ],
    note: 'Uma alteração celular não significa, por si só, que a pessoa tenha câncer. A confirmação depende de avaliação e exames realizados por profissionais de saúde.',
  },
]

export const symptoms = [
  {
    title: 'Caroço ou nódulo na mama ou na axila',
    description: 'Especialmente quando é novo, endurecido, parece fixo ou está aumentando. Também pode ter causas benignas.',
    icon: 'nodule',
  },
  {
    title: 'Mudanças persistentes na pele',
    description: 'Vermelhidão, espessamento, retrações, covinhas ou textura semelhante à casca de laranja.',
    icon: 'skin',
  },
  {
    title: 'Alterações no mamilo',
    description: 'Mudança recente de formato ou posição, como retração, feridas ou descamação persistente.',
    icon: 'nipple',
  },
  {
    title: 'Saída espontânea de líquido pelo mamilo',
    description: 'Especialmente quando ocorre de um lado só ou apresenta sangue.',
    icon: 'discharge',
  },
  {
    title: 'Mudança no tamanho ou formato da mama',
    description: 'Aumento progressivo, inchaço ou mudança perceptível, principalmente quando acompanhada de outras alterações.',
    icon: 'shape',
  },
  {
    title: 'Nódulos próximos à axila ou à clavícula',
    description: 'Essas alterações devem ser avaliadas por um profissional de saúde.',
    icon: 'nodes',
  },
]

export const nonModifiableFactors = [
  'Envelhecimento — o risco aumenta com a idade.',
  'Histórico familiar importante e algumas alterações genéticas hereditárias.',
  'Determinadas características da história hormonal e reprodutiva.',
  'Histórico pessoal de algumas doenças ou tratamentos, conforme avaliação profissional.',
]

export const habitRelatedFactors = [
  'Consumo de bebidas alcoólicas.',
  'Inatividade física.',
  'Excesso de gordura corporal, especialmente após a menopausa.',
  'Algumas exposições ocupacionais ou à radiação, em circunstâncias específicas.',
]

export const riskReductionActions = [
  'Praticar atividade física de forma regular, respeitando as condições e possibilidades de cada pessoa.',
  'Buscar uma alimentação saudável e variada.',
  'Evitar bebidas alcoólicas.',
  'Manter hábitos que favoreçam a saúde e o peso corporal adequado, sem dietas extremas ou cobranças com a aparência.',
  'A amamentação é reconhecida como fator de proteção quando faz parte da realidade da pessoa; isso não deve ser tratado como obrigação ou motivo de culpa.',
]

export const supportResources: OfficialSource[] = [
  { title: 'Atenção ao Câncer', organization: 'Ministério da Saúde', url: sources.cancerCare.url },
  { title: 'Onde tratar pelo SUS', organization: 'INCA', url: sources.whereToTreat.url },
  { title: 'Orientações aos pacientes e familiares', organization: 'INCA', url: sources.patientGuidance.url },
  { title: 'Direitos sociais da pessoa com câncer', organization: 'INCA', url: sources.socialRights.url },
  { title: 'Ouvidoria-Geral do SUS — Disque Saúde 136', organization: 'Ministério da Saúde', url: sources.ouvidoria.url },
]
