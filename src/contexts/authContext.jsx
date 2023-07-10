import React, { useContext, useEffect, useState } from "react"
import { auth, db } from "../services/firebase"
import {  signOut,  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, collection, setDoc, addDoc  } from "firebase/firestore"; 


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
        const user = userCredential.user
        const colRef = doc(db, "User", user.uid)
        await setDoc(colRef, { Name: user.displayName })
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