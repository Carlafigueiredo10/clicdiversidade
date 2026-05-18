import {
  collection,
  doc,
  getDoc,
  increment,
  runTransaction,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'

const NIVEIS = [
  'nunca_usei',
  'perguntas_simples',
  'produzo_conteudo',
  'ja_criei',
]

export async function submeterParticipante(input) {
  if (!NIVEIS.includes(input.nivel)) {
    throw new Error('Nível inválido')
  }

  return await runTransaction(db, async (tx) => {
    const statsRef = doc(db, 'stats', 'distribuicao')
    const snap = await tx.get(statsRef)

    const participanteRef = doc(collection(db, 'participantes'))
    const payload = {
      nome: input.nome.trim(),
      orgao: input.orgao.trim(),
      email: input.email.trim().toLowerCase(),
      whatsapp: input.whatsapp?.trim() || null,
      quer_grupo_whatsapp: !!input.quer_grupo_whatsapp,
      nivel: input.nivel,
      criado_em: serverTimestamp(),
      consentimento_lgpd: {
        aceito: true,
        em: serverTimestamp(),
        versao: 'v1',
      },
    }
    tx.set(participanteRef, payload)

    if (snap.exists()) {
      tx.update(statsRef, {
        [input.nivel]: increment(1),
        total: increment(1),
        atualizado_em: serverTimestamp(),
      })
    } else {
      const inicial = {
        nunca_usei: 0,
        perguntas_simples: 0,
        produzo_conteudo: 0,
        ja_criei: 0,
        total: 1,
        atualizado_em: serverTimestamp(),
      }
      inicial[input.nivel] = 1
      tx.set(statsRef, inicial)
    }

    return participanteRef.id
  })
}

export async function getDistribuicao() {
  const snap = await getDoc(doc(db, 'stats', 'distribuicao'))
  if (!snap.exists()) {
    return {
      nunca_usei: 0,
      perguntas_simples: 0,
      produzo_conteudo: 0,
      ja_criei: 0,
      total: 0,
    }
  }
  const data = snap.data()
  return {
    nunca_usei: data.nunca_usei ?? 0,
    perguntas_simples: data.perguntas_simples ?? 0,
    produzo_conteudo: data.produzo_conteudo ?? 0,
    ja_criei: data.ja_criei ?? 0,
    total: data.total ?? 0,
  }
}
