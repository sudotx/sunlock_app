
import { GoogleAuthProvider, createUserWithEmailAndPassword, onIdTokenChanged, sendPasswordResetEmail, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react"
import { auth } from '../firebase'


type TAuthContext = {
  currentUser: any,
  logout: any,
  login: any,
  resetPassword: any,
  loginGoogle: any,
  signup: any,
  sendMagicLink: any,
}

const AuthContext = React.createContext<TAuthContext | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useTodoContext must be within AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<undefined | null | any>()
  const [loading, setLoading] = useState(true) // Before user is authenticated



  const provider = new GoogleAuthProvider();

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email)
  }

  function logout() {
    return signOut(auth)
  }

  function loginGoogle() {
    return signInWithPopup(auth, provider)
  }

  function sendMagicLink(email: string, first = false) {
    window.localStorage.setItem('emailForSignIn', email);
    return sendSignInLinkToEmail(auth, email, {
      url: first ? "https://app.salesconfidant.com/authentication/passwordless?demo=true" : "https://app.salesconfidant.com/authentication/passwordless",
      // url:process.env.NODE_ENV === "development" ? "http://localhost:3000/create-account" : "http://app.salesconfidant.com/create-account",
      handleCodeInApp: true,
    }
    )
  }

  const value = {
    currentUser,
    logout,
    login,
    resetPassword,
    loginGoogle,
    signup,
    sendMagicLink
  }

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(user => {
      setCurrentUser(user)
      setLoading(false) // Once it's done authenticating set loading to false so children are returned
    })
    return () => unsubscribe();
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}