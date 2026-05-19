// Build cross-platform: monta dist/ com legacy (raiz) + app React (jornada).
// Roda no Netlify CI (Linux) e local (Windows/macOS).
import { execSync } from 'node:child_process'
import {
  cpSync,
  mkdirSync,
  rmSync,
  writeFileSync,
  existsSync,
} from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')

function sh(cmd, cwd = root) {
  console.log(`\n› ${cmd}`)
  execSync(cmd, { cwd, stdio: 'inherit', shell: true })
}

function copy(src, dest) {
  const s = resolve(root, src)
  if (!existsSync(s)) return
  cpSync(s, resolve(dist, dest), { recursive: true })
  console.log(`  copied ${src} → dist/${dest}`)
}

console.log('🧹 limpando dist/')
rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })

console.log('📄 copiando legacy estático')
copy('index.html', 'index.html')
copy('assets', 'assets')
copy('lelia', 'lelia')

console.log('⚛️  buildando app React (jornada)')
sh('npm install', resolve(root, 'app'))
sh('npm run build', resolve(root, 'app'))

// SPA fallback do /jornada/* aplicado so em prod (em dev o Vite resolve).
// Documentado em https://docs.netlify.com/routing/redirects/
console.log('📜 gerando dist/_redirects (SPA fallback de /jornada/*)')
writeFileSync(
  resolve(dist, '_redirects'),
  '/jornada/*  /jornada/index.html  200\n',
)

console.log('\n✅ build pronto em dist/')
