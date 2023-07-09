import React, { useContext, useEffect, useState } from "react"
import { auth } from "../services/firebase"
import {  signOut,  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const authContext  = React.createContext()

export function useAuth(){
    return  useContext(authContext)
}

export function AuthProvider({ children }){

const provider = new GoogleAuthProvider();
const [currentUser, setCurrentUser] = useState()

async function createUser() {
    try{
        const userCredential = await signInWithPopup(auth, provider)
        console.log(user)
    }
    catch(err){
        console.log(err)
    }
}

async function logoutUser(){
   try{
    await signOut(auth)
    console.log("User Singed Out")        
}
   catch(err){
    console.log(err)
   }
}

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
    return unsubscribe
}, [])

const value = { currentUser, createUser, logoutUser }

return (
    <authContext.Provider value={value}>
        { children }
    </authContext.Provider>
)
}