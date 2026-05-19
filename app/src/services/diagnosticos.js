import {
  collection,
  doc,
  getDoc,
  increment,
  runTransaction,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'

const TRILHAS_SLUGS = [
  'fundamental-dados',
  'autonomia-digital',
  'produtividade-automacao',
  'dados-decisao',
  'construcao',
  'programacao',
  'governanca',
]

export async function submeterDiagnostico(input) {
  if (!TRILHAS_SLUGS.includes(input.trilha_recomendada)) {
    throw new Error('Trilha recomendada inválida')
  }

  return await runTransaction(db, async (tx) => {
    const statsRef = doc(db, 'stats', 'diagnostico_distribuicao')
    const snap = await tx.get(statsRef)

    const diagRef = doc(collection(db, 'diagnosticos'))
    const payload = {
      respostas: input.respostas,
      trilha_recomendada: input.trilha_recomendada,
      aderencia: input.aderencia,
      criado_em: serverTimestamp(),
    }
    tx.set(diagRef, payload)

    if (snap.exists()) {
      tx.update(statsRef, {
        [input.trilha_recomendada]: increment(1),
        total: increment(1),
        atualizado_em: serverTimestamp(),
      })
    } else {
      const inicial = {
        'fundamental-dados': 0,
        'autonomia-digital': 0,
        'produtividade-automacao': 0,
        'dados-decisao': 0,
        construcao: 0,
        programacao: 0,
        governanca: 0,
        total: 1,
        atualizado_em: serverTimestamp(),
      }
      inicial[input.trilha_recomendada] = 1
      tx.set(statsRef, inicial)
    }

    return diagRef.id
  })
}

export async function getDistribuicaoDiagnostico() {
  const snap = await getDoc(doc(db, 'stats', 'diagnostico_distribuicao'))
  if (!snap.exists()) {
    return {
      'fundamental-dados': 0,
      'autonomia-digital': 0,
      'produtividade-automacao': 0,
      'dados-decisao': 0,
      construcao: 0,
      programacao: 0,
      governanca: 0,
      total: 0,
    }
  }
  const data = snap.data()
  return {
    'fundamental-dados': data['fundamental-dados'] ?? 0,
    'autonomia-digital': data['autonomia-digital'] ?? 0,
    'produtividade-automacao': data['produtividade-automacao'] ?? 0,
    'dados-decisao': data['dados-decisao'] ?? 0,
    construcao: data.construcao ?? 0,
    programacao: data.programacao ?? 0,
    governanca: data.governanca ?? 0,
    total: data.total ?? 0,
  }
}
