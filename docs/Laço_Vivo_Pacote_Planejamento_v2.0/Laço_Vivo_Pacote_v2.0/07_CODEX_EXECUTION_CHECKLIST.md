# LAÇO VIVO — CODEX EXECUTION CHECKLIST

## Fase A — Diagnóstico do workspace

- [ ] Abrir a pasta correta no VS Code.
- [ ] Pedir ao Codex para auditar arquivos existentes antes de sobrescrever qualquer coisa.
- [ ] Confirmar se o projeto já tem stack; preservar se estiver funcional.
- [ ] Se vazio, propor Vite + React + TypeScript.
- [ ] Confirmar que o Codex consegue usar geração de imagens; não assumir.

## Fase B — Sistema visual e estrutura

- [ ] Configurar tokens de cor e Nunito Sans.
- [ ] Criar Header, Footer, layout compartilhado e navegação.
- [ ] Criar rotas para as cinco páginas.
- [ ] Criar componentes de fontes, avisos educativos, cards e CTA.
- [ ] Testar navegação e estados ativos.

## Fase C — Conteúdo

- [ ] Inserir textos de `02_CONTEUDO_DAS_CINCO_PAGINAS.md`.
- [ ] Manter as fontes oficiais perto dos conteúdos médicos.
- [ ] Mostrar data da última revisão.
- [ ] Adicionar aviso de conteúdo educativo.
- [ ] Conferir o trecho de mamografia e as duas referências oficiais antes de publicar.

## Fase D — Assets com IA

- [ ] Gerar referência da logo e construir SVG limpo.
- [ ] Gerar símbolo de acolhimento separado.
- [ ] Gerar capa do documentário.
- [ ] Gerar/validar ilustração de anatomia.
- [ ] Gerar pictogramas não gráficos de sinais.
- [ ] Gerar ilustrações de prevenção e mamografia.
- [ ] Gerar ilustração de rede de cuidado.
- [ ] Validar coerência, estilo, licenças e ausência de texto/artefatos nas imagens.
- [ ] Criar alt text.

## Fase E — Vídeo

- [ ] Gerar clipes separados a partir do storyboard.
- [ ] Verificar direito de uso da ferramenta e da trilha.
- [ ] Editar narração, trilha, transições e tela final.
- [ ] Criar legendas e transcrição.
- [ ] Exportar MP4/WebM otimizados.
- [ ] Integrar player sem autoplay com áudio.

## Fase F — QA

- [ ] Testar 360, 390, 768, 1024, 1280 e 1440 px.
- [ ] Testar navegação por teclado e foco visível.
- [ ] Verificar contraste e tamanho de texto.
- [ ] Testar todos os links externos.
- [ ] Testar legendas, transcrição, play/pause e áudio do vídeo.
- [ ] Verificar console, imagens quebradas e overflow horizontal.
- [ ] Verificar títulos, metadados, favicon e idioma pt-BR.
- [ ] Atualizar fontes e data de revisão.

## Fase G — Entrega

- [ ] Mostrar ao usuário uma prévia das cinco páginas.
- [ ] Listar exatamente quais assets foram realmente criados.
- [ ] Informar se o vídeo está final ou se falta geração/edição.
- [ ] Explicar como rodar o projeto localmente.
- [ ] Entregar um resumo de arquivos e limitações sem afirmar que testes não executados foram aprovados.

## Prompt curto por fase (para uso depois do prompt mestre)

**1. Audit:** “Inspect this workspace and report the current stack, files, routes, assets, and missing requirements. Do not modify files yet.”

**2. Foundation:** “Implement the shared design system, routing, responsive header/footer, and page shells from the Laço Vivo planning documents. Keep all existing working code.”

**3. Content:** “Populate all five routes with the approved Portuguese content and verified source links. Do not invent medical information. Keep sources and last-reviewed dates visible.”

**4. Assets:** “Check the available image-generation skill and generate the assets listed in the visual prompt document. If unavailable, report that limitation and leave clearly named placeholders; never claim an asset exists unless the file is saved.”

**5. Video:** “Implement the responsive documentary player, poster, captions, transcript and graceful fallback. Do not claim the footage is complete unless an actual video file exists.”

**6. QA:** “Run the project and test every route at 360, 390, 768, 1024, 1280 and 1440px, keyboard access, visible focus, contrast, links, media and console errors. Fix all issues and report exact test results.”
