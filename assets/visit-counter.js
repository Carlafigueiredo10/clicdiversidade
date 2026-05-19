// Contador de visitas para as paginas HTML estaticas (landing e /lelia).
// Usa Firebase Web SDK via CDN (modular, v11) com mesma config publica do app.
// Incrementa 1x por sessao por secao, usando sessionStorage.

import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js'
import {
  doc,
  getFirestore,
  increment,
  serverTimestamp,
  setDoc,
} from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyDYRPSiTa-CnSqj6jfu6T3JBa3e0SQNufY',
  authDomain: 'clicdiversidade.firebaseapp.com',
  projectId: 'clicdiversidade',
  storageBucket: 'clicdiversidade.firebasestorage.app',
  messagingSenderId: '575473138445',
  appId: '1:575473138445:web:a0f3ee131aa091e8e00e44',
}

function pathToDocId(pathname) {
  if (!pathname || pathname === '/') return 'home'
  if (pathname === '/lelia' || pathname.startsWith('/lelia/')) return 'lelia'
  if (pathname === '/jornada' || pathname.startsWith('/jornada')) {
    return 'jornada'
  }
  return 'home'
}

async function registrar() {
  try {
    const docId = pathToDocId(location.pathname)
    const sessionKey = 'visited:' + docId
    if (sessionStorage.getItem(sessionKey)) return
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    await setDoc(
      doc(db, 'page_visits', docId),
      { total: increment(1), updated_at: serverTimestamp() },
      { merge: true },
    )
    sessionStorage.setItem(sessionKey, '1')
  } catch (err) {
    console.error('[visit-counter]', err)
  }
}

registrar()
