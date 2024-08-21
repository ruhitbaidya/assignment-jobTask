import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, {createContext, useEffect, useState } from 'react'
import auth from '../firebase.config'
export const UserLogin = createContext(null)
const UserAuth = ({children}) => {
  const [data, setData] = useState("null")
  const [loading, setLoading] = useState(true)
  const [dataFind, setDataFind] = useState(null)

  const emailPasssignUp = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIngoogle = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googlePopupLogin = ()=>{
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (person) => {
          setData(person)
          setLoading(false)
      })
      return ()=>{
        unsubscribe()
      }
  })

  const info = {data, loading, setData, emailPasssignUp, dataFind, setDataFind, signIngoogle, googlePopupLogin}
  return (
    <UserLogin.Provider value={info}>
      {children}
    </UserLogin.Provider>
  )
}

export default UserAuth