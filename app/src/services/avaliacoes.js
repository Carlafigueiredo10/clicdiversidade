import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'

// Envia uma avaliacao da oficina "Humanos no Comando". Anonimo — nao exige login.
// Nota geral (1-5) e obrigatoria; o resto e opcional (so vai pro doc se preenchido).
export async function enviarAvaliacao(input) {
  const notaGeral = Number(input.nota_geral)
  if (!Number.isInteger(notaGeral) || notaGeral < 1 || notaGeral > 5) {
    throw new Error('Dê a nota geral da oficina')
  }

  const payload = {
    nota_geral: notaGeral,
    criado_em: serverTimestamp(),
  }

  const notaConteudo = Number(input.nota_conteudo)
  if (Number.isInteger(notaConteudo) && notaConteudo >= 1 && notaConteudo <= 5) {
    payload.nota_conteudo = notaConteudo
  }
  if (typeof input.recomenda === 'boolean') {
    payload.recomenda = input.recomenda
  }

  for (const chave of ['funcionou', 'melhorar', 'assunto_proximo']) {
    const v = (input[chave] || '').trim()
    if (v) payload[chave] = v.slice(0, 2000)
  }
  for (const chave of ['nome', 'orgao']) {
    const v = (input[chave] || '').trim()
    if (v) payload[chave] = v.slice(0, 200)
  }

  return await addDoc(collection(db, 'avaliacoes'), payload)
}

// Lista todas as avaliacoes, mais recentes primeiro. So o admin le (regra de
// seguranca) — usado no painel /admin.
export async function getAvaliacoes() {
  const q = query(collection(db, 'avaliacoes'), orderBy('criado_em', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}
