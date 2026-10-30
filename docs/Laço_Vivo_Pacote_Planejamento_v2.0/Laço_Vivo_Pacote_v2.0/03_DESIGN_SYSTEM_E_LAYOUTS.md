# LAÇO VIVO — DESIGN SYSTEM E LAYOUTS v1.0

## 1. Direção de arte

Dark editorial premium. A experiência deve parecer uma publicação digital de saúde contemporânea, não uma landing page escolar genérica nem uma interface gamer. O visual é calmo, confiante, clean e humano.

Princípios: espaço negativo generoso; grid consistente; títulos marcantes mas não exagerados; superfícies discretas; ilustrações originais; texto curto em blocos; poucos acentos rosa/champagne; navegação óbvia.

## 2. Tokens de cor

```css
:root {
  --lv-bg: #171519;
  --lv-surface: #252027;
  --lv-surface-raised: #302832;
  --lv-wine: #4B293C;
  --lv-rose-muted: #A85D75;
  --lv-ribbon: #E8AAB8;
  --lv-champagne: #D8C5AC;
  --lv-text: #F8F5F1;
  --lv-text-muted: #C9BEC5;
  --lv-border: rgba(232, 170, 184, 0.18);
  --lv-focus: #E8AAB8;
}
```

Use `#171519` como canvas, `#252027` para cards, vinho em pequenos planos ou separadores. Rosa suave deve ficar para o laço, links ativos e destaques importantes. Champagne apenas como detalhe. Não usar rosa suave em grandes superfícies de texto.

## 3. Tipografia

- Família: Nunito Sans.
- Importar peso 400, 500, 600 e 700.
- Texto corpo desktop: 16–18 px, line-height 1.65.
- Texto corpo mobile: 16 px, line-height 1.6.
- H1 fluido com `clamp(2.2rem, 5vw, 4.6rem)`; line-height 1.05–1.15.
- H2 fluido com `clamp(1.65rem, 3vw, 2.6rem)`.
- H3: 1.2–1.45rem.
- Labels: 0.72–0.82rem, uppercase com tracking moderado.
- Limitar largura de leitura a cerca de 65–75 caracteres por linha.

## 4. Layout e espaçamento

- Container máximo: 1160–1240 px.
- Padding lateral: 24 px desktop; 20 px tablet; 18 px mobile (mínimo seguro 16 px).
- Espaçamento de seção: 88–112 px desktop; 64–80 px tablet; 48–64 px mobile.
- Cards com radius 18–24 px, borda fina e fundo de superfície; sombras quase imperceptíveis.
- Botões com altura mínima 46 px, estados hover/focus/active e texto explícito.
- Evitar grades apertadas; 2–3 colunas no máximo em desktop para conteúdo importante.

## 5. Header e navegação

- Logo horizontal à esquerda; links à direita em desktop: Início, Entenda, Sinais e sintomas, Prevenção, Apoio.
- Estado ativo evidente em rosa suave com indicação visual discreta.
- Mobile: menu acessível com botão nomeado “Abrir menu”; abrir/fechar por teclado; fechar após seleção e ao pressionar Escape.
- Header pode ser sticky se não comprometer a tela; evitar header alto.
- Não usar ícones sem rótulo quando a função não for óbvia.

## 6. Footer global

- Logo compacta + slogan.
- Atalhos para as cinco páginas.
- Links para INCA e Ministério da Saúde.
- Aviso: “Conteúdo educativo. Não substitui avaliação, diagnóstico ou orientação de profissionais de saúde.”
- Mostrar data de revisão do conteúdo e fontes.
- Não acrescentar redes sociais fictícias.

## 7. Layout de cada página

### Página 01 — Início

1. Header compacto.
2. Área de documentário no topo: player de proporção 16:9, centralizado, largura até 980 px, moldura suave e raio 24 px. Capa feita por IA; controle play claro; não autoplay; legenda/transcrição disponíveis.
3. Abaixo, split section: texto à esquerda (título “Conhecimento muda a forma de cuidar.” + copy e CTA) e símbolo abstrato de acolhimento grande à direita.
4. Pequena navegação para explorar as páginas 02–05, com cards editoriais discretos; não sobrecarregar a home.
5. Footer.

### Página 02 — Entenda

1. Hero editorial com título “Entender é o primeiro passo para cuidar.”
2. Bloco de definição com texto à esquerda e arte conceitual discreta à direita.
3. Seção “Como isso acontece?” em sequência visual de 3 passos (célula normal → alteração → multiplicação desordenada), sem aparência de diagnóstico clínico.
4. Seção anatômica ductos/lóbulos com ilustração educativa e legenda em HTML.
5. Card informativo sobre quem pode desenvolver, incluindo homens com linguagem cuidadosa.
6. CTA para Página 03.

### Página 03 — Sinais e sintomas

1. Hero com a frase “Perceber mudanças importa.”
2. Grid editorial de sinais (2 colunas desktop; 1 coluna mobile), com ícones/ilustrações discretos e texto breve.
3. Módulo de tranquilização “Um sinal não é um diagnóstico.”
4. Bloco de ação claro “Ao notar alteração, procure uma UBS — não espere a próxima mamografia de rotina”.
5. Nota sobre conhecer o corpo sem técnica/frequência fixa de autoexame.
6. CTA para Página 04.

### Página 04 — Prevenção e detecção precoce

1. Hero “Cuidar também é conhecer os riscos.”
2. Primeira seção obrigatoriamente “Fatores de risco”, em dois grupos visuais: não modificáveis e relacionados a hábitos/exposições.
3. Cards de hábitos que podem ajudar a reduzir risco, sem culpabilização ou pressão estética.
4. Comparação em duas colunas: diagnóstico precoce (sintomas) vs rastreamento (sem sintomas).
5. Módulo especial sobre mamografia com data/fontes visíveis, distinguindo INCA 50–74 bienal e acesso SUS comunicado pelo MS em 29/10/2026. Não transformar isto em recomendação individual.
6. CTA para Página 05.

### Página 05 — Apoio

1. Hero “Informação também é saber onde procurar ajuda.”
2. Destaque prático “Comece pela UBS”.
3. Fluxo responsivo: UBS → avaliação/exames → serviço especializado (UNACON/CACON), deixando claro que o encaminhamento varia conforme a rede local.
4. Bloco de apoio a pacientes/família com lista curta e respeitosa.
5. Cards de links oficiais: Ministério da Saúde, INCA, direitos sociais e OuvSUS 136.
6. Encerramento “Informação orienta. Apoio fortalece.”

## 8. Motion e interação

- Apenas microinterações: fade/translate sutil de 150–250 ms, hover leve, estado de foco.
- Não animar todos os blocos de entrada; nada de parallax exagerado, scroll hijacking ou texto que se move continuamente.
- Respeitar `prefers-reduced-motion`.
- As animações não podem esconder conteúdo ou bloquear navegação.

## 9. Responsividade

- Mobile: 360–430 px; uma coluna; cards empilhados; símbolo da home abaixo/ao lado do texto conforme espaço, sem comprimir.
- Tablet: 600–1024 px; grades flexíveis de uma ou duas colunas; espaçamentos reduzidos.
- Desktop: acima de 1024 px; split sections e grids com largura controlada.
- Testar 360, 390, 768, 1024, 1280 e 1440 px.
- Vídeo 16:9 responsivo, nunca ultrapassar viewport.
- Não reduzir fonte do corpo abaixo de 16 px em layouts normais.

## 10. Acessibilidade e qualidade

- HTML semântico: header/nav/main/section/footer.
- Um H1 por página; ordem correta de headings.
- Texto alternativo descritivo para imagens informativas; imagens decorativas com alt vazio.
- Contraste WCAG AA para texto normal; verificar especialmente texto muted e rosa em fundo escuro.
- Foco visível, navegação por teclado, labels e aria apenas quando necessários.
- Legendas e transcrição do documentário.
- Links externos com aviso/ícone acessível; abrir em nova aba apenas se justificar e incluir `rel="noopener noreferrer"`.
- Fontes e datas visíveis. Não apresentar imagem gerada como exame real.
