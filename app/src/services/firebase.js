import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase Web SDK config — esses valores são públicos por design.
// A segurança vem das regras do Firestore, não do segredo da apiKey.
const firebaseConfig = {
  apiKey: 'AIzaSyDYRPSiTa-CnSqj6jfu6T3JBa3e0SQNufY',
  authDomain: 'clicdiversidade.firebaseapp.com',
  projectId: 'clicdiversidade',
  storageBucket: 'clicdiversidade.firebasestorage.app',
  messagingSenderId: '575473138445',
  appId: '1:575473138445:web:a0f3ee131aa091e8e00e44',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
