import React, { useContext, useEffect, useState } from "react"
import { auth, db } from "../services/firebase"
import {  signOut,  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, collection, setDoc, addDoc  } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../services/firebase"


const authContext  = React.createContext()

export function useAuth(){
    return  useContext(authContext)
}

export function AuthProvider({ children }){

const provider = new GoogleAuthProvider();
const [currentUser, setCurrentUser] = useState()
const [pfp, setPfp] = useState()

async function createUser() {
    try{
        const userCredential = await signInWithPopup(auth, provider)
        sessionStorage.setItem("user", "true")
        const user = userCredential.user
        const colRef = doc(db, "User", user.uid)
        await setDoc(colRef, { Name: user.displayName })
        console.log(user)
    }
    catch(err){
        console.log(err)
    }
}

async function updateUser(img){
    try{
        const imgRef = ref(storage, `profileImages/${currentUser.uid}` )
        await uploadBytes(imgRef, img)
        const pfp = await getDownloadURL(imgRef)
        setPfp(pfp)
    }
    catch(err){
        console.log(err)
    }
}

async function getPfp(user){
    try{
        const imgRef = ref(storage, `profileImages/${user.uid}` )
        const pfp = await getDownloadURL(imgRef)
        setPfp(pfp)
        console.log(pfp)
    }
    catch(err){
        console.log("bozo", err)
    }
}

async function logoutUser(){
   try{
    await signOut(auth)
    sessionStorage.removeItem("user")
    console.log("User Singed Out")        
}
   catch(err){
    console.log(err)
   }
}

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        getPfp(user)
    })
    return unsubscribe
}, [])

const value = { currentUser, createUser, logoutUser , updateUser, pfp }

return (
    <authContext.Provider value={value}>
        { children }
    </authContext.Provider>
)
}