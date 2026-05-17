# CLIC_diversidade

Iniciativa de letramento digital aplicada à IA no setor público — diversidade, inclusão, ética e autonomia tecnológica.

## Stack
- React 19 + Vite 6
- React Router 7
- Tailwind CSS v4

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  app/        # roteamento, providers, bootstrap da aplicação
  pages/      # páginas/rotas
  features/   # módulos de domínio (criados conforme necessário)
  shared/     # utilitários e helpers reutilizáveis
  components/ # componentes de UI compartilhados
  services/   # integrações externas (APIs)
```

## Deploy
Netlify — configuração em `netlify.toml`. SPA com fallback para `index.html`.

## Pasta `legacy/`
Contém o build anterior (sem código-fonte original), usado como referência visual durante a recriação. Será removida quando a recriação estiver completa.
