import { useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { auth } from './firebase'

// Email autorizado a ler /page_visits (espelha firestore.rules:56).
export const ADMIN_EMAIL = 'carlacristinesoares@gmail.com'

const provider = new GoogleAuthProvider()

export function signInWithGoogle() {
  return signInWithPopup(auth, provider)
}

export function signOutUser() {
  return signOut(auth)
}

export function isAdmin(user) {
  return !!user && user.email === ADMIN_EMAIL
}

// Hook unico pro estado de auth. Retorna { user, loading }.
// user === null quando deslogado; user === undefined nunca (loading cobre).
export function useAuthUser() {
  const [state, setState] = useState({ user: null, loading: true })
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) =>
      setState({ user: u, loading: false }),
    )
    return unsub
  }, [])
  return state
}
