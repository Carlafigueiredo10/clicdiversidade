import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, statSync } from 'node:fs'
import { extname, join, normalize, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const legacyRoot = resolve(__dirname, '..')

// Serve os arquivos estaticos do legacy (index.html da raiz, assets/, lelia/)
// no mesmo servidor que o Vite. Em producao quem faz isso e o Netlify; em dev
// o Netlify Dev encaminha tudo pro Vite, entao o proprio Vite precisa cobrir
// as duas pastas.
function legacyStaticPlugin() {
  const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.mjs': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.txt': 'text/plain; charset=utf-8',
  }
  return {
    name: 'legacy-static',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
        // /jornada/* fica com o Vite (SPA do React)
        if (urlPath === '/jornada' || urlPath.startsWith('/jornada/')) {
          return next()
        }
        let filePath = normalize(join(legacyRoot, urlPath))
        if (!filePath.startsWith(legacyRoot)) return next()
        let stat
        try {
          stat = statSync(filePath)
        } catch {
          return next()
        }
        if (stat.isDirectory()) {
          filePath = join(filePath, 'index.html')
          try {
            stat = statSync(filePath)
          } catch {
            return next()
          }
        }
        try {
          const content = readFileSync(filePath)
          res.setHeader(
            'Content-Type',
            MIME[extname(filePath).toLowerCase()] || 'application/octet-stream',
          )
          res.end(content)
        } catch {
          next()
        }
      })
    },
  }
}

export default defineConfig({
  base: '/jornada/',
  plugins: [react(), tailwindcss(), legacyStaticPlugin()],
  build: {
    outDir: '../dist/jornada',
    emptyOutDir: true,
  },
})
