import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './firebase'

const CATEGORIAS = ['conteudo', 'erro', 'ideia', 'outro']

// Envia uma sugestao de melhoria. Anonimo — nao exige login.
// `contato` e opcional (so vai pro doc se preenchido).
export async function enviarSugestao(input) {
  const mensagem = (input.mensagem || '').trim()
  if (!mensagem) throw new Error('Escreva sua sugestão')
  if (!CATEGORIAS.includes(input.categoria)) {
    throw new Error('Categoria inválida')
  }

  const payload = {
    mensagem: mensagem.slice(0, 2000),
    categoria: input.categoria,
    criado_em: serverTimestamp(),
  }
  const contato = input.contato?.trim()
  if (contato) payload.contato = contato.slice(0, 200)

  return await addDoc(collection(db, 'sugestoes'), payload)
}

// Lista todas as sugestoes, mais recentes primeiro. So o admin consegue ler
// (regra de seguranca) — usado no painel /admin.
export async function getSugestoes() {
  const q = query(collection(db, 'sugestoes'), orderBy('criado_em', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }))
}
