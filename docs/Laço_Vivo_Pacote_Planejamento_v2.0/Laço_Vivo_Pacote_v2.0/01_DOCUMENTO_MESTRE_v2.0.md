# LAÇO VIVO — DOCUMENTO MESTRE v2.0

**Atualizado em:** 30 de outubro de 2026  
**Status:** cinco páginas planejadas; rascunhos editoriais revisados nesta versão; identidade e arquitetura técnica especificadas; implementação e geração de mídia pendentes.

## 1. Visão geral e propósito

- **Nome:** Laço Vivo.
- **Tema:** prevenção ao câncer de mama.
- **Slogan:** “Informação que acolhe. Prevenção que transforma.”
- **Objetivo:** um site de conscientização e educação, com qualidade visual premium, informação clara e fontes confiáveis.
- **Resultado desejado para o visitante:** sair com mais **consciência** da importância da prevenção e da detecção precoce, adquirir **conhecimento útil e confiável**, e sentir o acolhimento necessário — sem sentimentalismo excessivo.
- **Público:** amplo. Não presumir que apenas mulheres visitam o site; explicar com cuidado que homens também podem desenvolver câncer de mama.
- **Tom:** humano, calmo, direto, inclusivo e sem alarmismo, julgamento, culpabilização ou promessas.

## 2. Requisitos obrigatórios do trabalho

A foto original do quadro está arquivada na Biblioteca em `/Projetos/Laço Vivo/requisitos-do-trabalho-foto.png`.

Requisitos identificados: tema prevenção ao câncer de mama; site com logo, imagens, vídeo/documentário, cinco páginas e links funcionais. A anotação que parece “H.D. grátis” permanece incerta e não deve ser tratada como requisito até confirmação.

### Requisitos técnicos

- Responsivo de verdade para celular, tablet e desktop.
- Sem rolagem horizontal indevida, sobreposição, texto cortado ou elementos quebrados.
- Navegação e links funcionais.
- Conteúdo em pt-BR.
- Vídeo com controles, legendas e transcrição; nunca iniciar com áudio automaticamente.
- Acessibilidade por teclado, contraste adequado, foco visível, nomes acessíveis e suporte a `prefers-reduced-motion`.
- Testar pelo menos 360, 390, 768, 1024, 1280 e 1440 px de largura.

## 3. Identidade visual aprovada

### Direção

Dark, clean, premium, elegante, soft, acolhedora e editorial. Evitar estética gamer/tech, template genérico, excesso de rosa, corações e laços decorativos espalhados, brilhos exagerados, gradientes chamativos e elementos sem função.

### Paleta

| Uso | Cor | Hex |
|---|---|---|
| Fundo principal | Grafite quase preto | `#171519` |
| Superfícies/cards | Grafite ameixa | `#252027` |
| Vinho complementar | Vinho profundo | `#4B293C` |
| Rosa queimado complementar | Rosa queimado | `#A85D75` |
| Laço da marca | Rosa suave | `#E8AAB8` |
| Detalhes pontuais | Champagne suave | `#D8C5AC` |
| Texto principal | Off-white | `#F8F5F1` |
| Texto secundário | Cinza rosado claro | `#C9BEC5` |

Rosa suave é protagonista da logo; champagne é detalhe pequeno. Não usar rosa em todos os componentes. Manter contraste legível.

### Tipografia

- **Nunito Sans** em todo o site.
- Pesos: 400 parágrafos; 500 navegação/ênfases; 600 subtítulos e wordmark; 700 títulos principais.
- Wordmark em minúsculas: `laço vivo`, peso 600 e tracking discreto.
- Não adicionar outras fontes sem motivo claro.

## 4. Logo — direção aprovada, execução pendente

A logo deve ter um laço de conscientização reconhecível, redesenhado com linhas suaves, curvas elegantes e proporções próprias. Nada infantil, genérico, excessivamente brilhante ou complexo.

- Símbolo em rosa suave `#E8AAB8`, com detalhe mínimo em champagne `#D8C5AC`.
- Wordmark `laço vivo` em Nunito Sans 600 e off-white sobre fundo escuro.
- Criar versão horizontal, versão símbolo isolado e favicon.
- Preferir SVG limpo e editável; usar PNG transparente como prévia/asset auxiliar.
- Não inserir o slogan obrigatoriamente dentro da marca; ele pode aparecer abaixo em aplicações institucionais.
- O laço oficial é diferente do símbolo abstrato de acolhimento da página inicial.

## 5. Arquitetura — cinco páginas aprovadas

1. **Início** — marca, documentário em destaque, texto à esquerda e símbolo abstrato de acolhimento à direita abaixo do vídeo.
2. **Entenda o câncer de mama** — definição, como acontece, ductos/lóbulos, quem pode desenvolver e por que conhecer importa.
3. **Sinais e sintomas** — alterações que merecem atenção, explicação de que sinal não é diagnóstico e orientação para procurar atendimento.
4. **Prevenção e detecção precoce** — fatores de risco, atitudes que podem reduzir risco, diferença entre diagnóstico precoce e rastreamento e mamografia.
5. **Apoio e acolhimento** — porta de entrada do SUS, rede de atendimento, apoio de pessoas próximas e fontes/canais oficiais.

## 6. Layout da página inicial aprovado

- Vídeo/documentário na parte superior, centralizado horizontalmente, com moldura discreta bem acabada e cantos arredondados.
- Abaixo: texto à esquerda e um símbolo grande de acolhimento à direita.
- O símbolo da home deve ser abstrato, autoral e transmitir proteção, cuidado e apoio. Pode sugerir florescimento discretamente, mas não deve ser uma flor literal nem um ícone pronto.
- Desktop: vídeo centralizado acima; texto à esquerda e símbolo à direita.
- Tablet: ajustar proporções e espaçamentos.
- Celular: vídeo responsivo; texto e símbolo empilhados com boa hierarquia.

## 7. Conteúdo e rigor editorial

Os textos das páginas 01–05 estão no arquivo `02_CONTEUDO_DAS_CINCO_PAGINAS.md`. São rascunhos editoriais source-checked, ainda sujeitos à revisão de professor e revisão profissional antes de publicação.

Regras:
- Distinguir prevenção primária, diagnóstico precoce e rastreamento.
- Não afirmar que hábitos saudáveis eliminam o risco.
- Não confundir mamografia com prevenção do aparecimento da doença: mamografia é exame de detecção.
- Diante de alteração suspeita, procurar UBS/serviço de saúde sem esperar pela próxima mamografia de rotina.
- Não apresentar sinais como diagnóstico, nem sugerir que todo nódulo é câncer.
- Não ensinar uma rotina obrigatória de autoexame mensal.
- Não culpabilizar pacientes por hábitos, peso, história reprodutiva, genética ou diagnóstico.
- Evitar números sem contexto e datas sem fonte.
- Fontes de saúde devem ser identificadas com nome, título, link e data de última verificação.

### Mamografia — redação cuidadosa necessária

Na consulta às fontes oficiais em 30/10/2026:
- O INCA indica rastreamento populacional de rotina para mulheres de 50 a 74 anos, a cada dois anos.
- O conteúdo do Ministério da Saúde publicado em 29/10/2026 informa acesso pelo SUS a mamografia para mulheres de 40 a 74 anos mesmo sem sintomas e para mulheres de qualquer idade quando houver indicação médica.
- O INCA também descreve acesso por demanda para pessoas de 40–49 anos e acima de 74, com orientação profissional sobre riscos e benefícios.
- O site deve explicar a diferença entre recomendação de rastreamento de rotina, acesso por demanda e investigação de sintomas. Não dizer que todas devem fazer exame anual ou que acesso significa recomendação universal.
- Revalidar essa orientação imediatamente antes de publicar.

## 8. Conteúdo do documentário

- Duração-alvo: 45–55 segundos (dentro da ideia original de 40–60 segundos).
- Cenas cinematográficas geradas por IA, movimentos suaves, narração pt-BR, legendas, trilha instrumental discreta e tela final com identidade Laço Vivo.
- Não apresentar cenas geradas como testemunhos ou registros reais.
- Não usar imagem identificável de paciente, linguagem sensacionalista ou promessas de cura.
- O roteiro e storyboard estão em `05_VIDEO_DOCUMENTARIO.md`.
- O Codex pode editar/montar/integrar; a geração de vídeo deve usar ferramenta especializada disponível no momento. Não colocar chaves de API no frontend.

## 9. Imagens e assets

- Criar os assets do zero por IA, conforme requisito do usuário.
- A documentação oficial da OpenAI de 16/04/2026 informa que Codex pode usar a skill de geração de imagens com GPT Image para criar/editar imagens para sites. O Codex deve verificar a disponibilidade real dessa skill no ambiente VS Code antes de afirmar que gerou algo.
- Nenhuma imagem deve conter texto, números, logotipos ou rótulos gerados; inserir textos como HTML/CSS reais.
- Anatomia e educação médica exigem verificação: imagens de IA são esquemáticas, não clínicas. Se a anatomia gerada não puder ser conferida, usar diagrama vetorial construído a partir de fonte oficial e não publicar uma representação duvidosa.
- Prompts completos estão em `04_LOGO_E_PROMPTS_VISUAIS.md`.

## 10. Plano técnico recomendado

- Se o workspace já tiver projeto, o Codex deve preservar e primeiro explicar a stack existente.
- Se estiver vazio, recomendação: Vite + React + TypeScript, React Router e CSS próprio; ícones Lucide React apenas para ícones auxiliares. Não introduzir framework visual pesado sem necessidade.
- Páginas com rotas: `/`, `/entenda`, `/sinais-e-sintomas`, `/prevencao`, `/apoio`.
- Componentes compartilhados: Header, Footer, PageShell, SectionHeading, SourceList, CTA, VideoPlayer, ResponsiveImage e BackToTop opcional.
- Criar `src/data/content.ts` ou equivalente para conteúdo, links e fontes, evitando cópia desordenada.
- Assets em `public/assets/` com nomes claros e sem dependência de URL externa para imagens principais.
- Sem login, cadastro, comentários, banco de dados ou coleta de dados pessoais: não foram solicitados.
- SEO básico, metadados por página, favicon, Open Graph e sitemap se adequado.

## 11. Processo de trabalho

- Usuário quer participar de decisões, mas não precisa dominar conteúdo médico ou programação.
- O assistente conduz a sequência, pesquisa, redação, estrutura e documentação.
- Não perguntar novamente o que já está decidido.
- Não reabrir decisões aprovadas sem necessidade.
- Prompts técnicos para Codex devem ser específicos e preferencialmente em inglês.
- Não iniciar geração de imagens fora do Codex sem pedido explícito do usuário.
- O assistente não pode executar tarefas no VS Code local do usuário; entrega os arquivos e os prompts para Codex executar.

## 12. Status consolidado

| Frente | Situação |
|---|---|
| Requisitos originais e foto do quadro | Arquivados |
| Nome, slogan, paleta e tipografia | Definidos |
| Conceito da logo | Definido; arte final pendente |
| Estrutura de cinco páginas | Aprovada |
| Página inicial | Layout conceitual aprovado; produção pendente |
| Conteúdo das páginas 02–05 | Primeiros rascunhos revistos; revisão escolar/profissional e montagem final pendentes |
| Conteúdo da página 01 | Copy inicial preparado neste pacote |
| Design system e layouts por página | Especificados neste pacote |
| Prompts de logo/imagens | Preparados; geração pendente no Codex |
| Documentário | Roteiro e storyboard preparados; clipes/edição pendentes |
| Prompt mestre Codex | Preparado |
| Implementação | Ainda não iniciada |
| QA responsivo/acessibilidade/links | Pendente após implementação |

## 13. Registro de decisões importantes

- 30/10/2026 — Nome Laço Vivo e slogan “Informação que acolhe. Prevenção que transforma.”
- 30/10/2026 — Direção dark, clean, premium, soft e acolhedora.
- 30/10/2026 — Paleta: `#171519`, `#252027`, `#4B293C`, `#A85D75`, `#E8AAB8`, `#D8C5AC`, `#F8F5F1`.
- 30/10/2026 — Nunito Sans como fonte única principal.
- 30/10/2026 — Logo deve usar laço real, soft e elegante; não ícone genérico.
- 30/10/2026 — Página inicial: vídeo no topo centralizado; texto abaixo à esquerda e símbolo de acolhimento à direita.
- 30/10/2026 — Símbolo de acolhimento é separado da logo.
- 30/10/2026 — Cinco páginas aprovadas.
- 30/10/2026 — Responsividade obrigatória em celular, tablet e desktop.
- 30/10/2026 — Resultado desejado: consciência e conhecimento primeiro; acolhimento na medida certa.
- 30/10/2026 — Página 04 começa por Fatores de risco, conforme sugestão do usuário.
- 30/10/2026 — Conteúdo das cinco páginas deve ser didático, claro, visual, não alarmista e apoiado em fontes oficiais.
