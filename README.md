# CLIC_diversidade

Iniciativa de letramento digital aplicada à IA no setor público — diversidade, inclusão, ética e autonomia tecnológica.

## Status atual

Este repositório publica o **build compilado como site estático**. O código-fonte do design original não está disponível neste repo.

- `index.html` + `assets/` são o artefato compilado da versão atual do site.
- `netlify.toml` está configurado para deploy estático puro — sem etapa de build.
- Push para `main` faz a Netlify republicar automaticamente.

## Branches

- `main` — publicação estática atual.
- `rebuild-attempt` — scaffold WIP de recriação em React + Vite + Tailwind v4 (abandonado por divergência visual do design original; preservado para retomada futura).

## Próximas evoluções

Quando o site for evoluir (novas seções, formulários, integrações, ferramentas in-page), recriamos a base em React partindo do `rebuild-attempt` ou refazendo com referências melhores do design original (idealmente o código exportado da plataforma que gerou o site).

## Deploy

Conectado à Netlify. Qualquer push em `main` republica o site.
