import {
  collection,
  doc,
  getDocs,
  increment,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from './firebase'

const COLLECTION = 'page_visits'

// Mapeia pathname (URL) -> ID do documento Firestore (uma "secao" do site).
// 3 buckets: home (landing legacy), jornada (SPA inteira), lelia (homenagem).
export function pathToDocId(pathname) {
  if (!pathname || pathname === '/') return 'home'
  if (pathname === '/lelia' || pathname.startsWith('/lelia/')) return 'lelia'
  if (pathname === '/jornada' || pathname.startsWith('/jornada')) {
    return 'jornada'
  }
  return 'home'
}

const SESSION_PREFIX = 'visited:'

// Incrementa o contador da secao atual, no maximo 1x por sessao do browser.
// Usa increment(1) + merge pra ser atomico no Firestore.
export async function registrarVisita(pathname) {
  const docId = pathToDocId(pathname)
  const sessionKey = SESSION_PREFIX + docId
  if (sessionStorage.getItem(sessionKey)) return { skipped: true, docId }
  const ref = doc(db, COLLECTION, docId)
  await setDoc(
    ref,
    { total: increment(1), updated_at: serverTimestamp() },
    { merge: true },
  )
  sessionStorage.setItem(sessionKey, '1')
  return { skipped: false, docId }
}

// Le todos os contadores. Usado pela pagina de admin.
export async function getAllVisitas() {
  const snap = await getDocs(collection(db, COLLECTION))
  return snap.docs.map((d) => ({
    id: d.id,
    total: d.data().total ?? 0,
    updated_at: d.data().updated_at ?? null,
  }))
}
