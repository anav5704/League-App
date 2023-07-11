import React, { useContext, useEffect, useState } from "react"
import { auth, db } from "../services/firebase"
import {  signOut,  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { doc, collection, setDoc, addDoc, onSnapshot } from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../services/firebase"


const authContext  = React.createContext()

export function useAuth(){
    return  useContext(authContext)
}

export function AuthProvider({ children }){

const [currentUser, setCurrentUser] = useState()
const [pfp, setPfp] = useState()
const [username, setUsername] = useState()

async function createUser(name, email, password, img) {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        sessionStorage.setItem("user", "true")
        const user = userCredential.user
        const colRef = doc(db, "User", user.uid)
        await setDoc(colRef, { 
            Name: name , 
            Email: email
         })
         const imgRef = ref(storage, `profileImages/${user.uid}` )
         await uploadBytes(imgRef, img)
         const pfp = await getDownloadURL(imgRef)
         setPfp(pfp) 
        console.log(user)
        console.log("User Created")
    }
    catch(err){
        console.log(err)
        console.log(name, email, password, img)
    }
}

async function loginUser( email, password) {
    try{
        await signInWithEmailAndPassword(auth, email, password)
        sessionStorage.setItem("user", "true")
        console.log("User Logged In")
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
        const docRef = doc(db, "User", user.uid)
        onSnapshot(docRef, (snapshot) => { 
            setUsername(snapshot.data().Name)
        })
        setCurrentUser(user)
        getPfp(user)
    })
    return unsubscribe
}, [])

const value = { currentUser, createUser, logoutUser, loginUser , updateUser, pfp, username }

return (
    <authContext.Provider value={value}>
        { children }
    </authContext.Provider>
)
}