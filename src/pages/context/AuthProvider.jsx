import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import { auth } from '../../firebase/firebase'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    const createUser=(email,password)=>{
        // use firebase build in functions
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        // when user is createing loading should be true 
      }

    const authInfo={user,setUser,loading,setLoading,createUser}
    
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
