import React, { useContext, useEffect, useState } from "react"
import { auth, db } from "../services/firebase"
import {  signOut,  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { doc, collection, setDoc, addDoc, onSnapshot, updateDoc, query, orderBy, snapshotEqual, getDocs } from "firebase/firestore"; 
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
const [events, setEvents] = useState([])


async function createUser(name, email, password, img) {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        localStorage.setItem("user", "true")
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

async function addEvent(event, title, venue, dayTime) {
    try{
        const colRef = doc(db, "Events", title)
        await setDoc(colRef, { 
            Type: event , 
            Title: title , 
            Venue: venue ,
            DayTime: new Date(dayTime)
         })
        console.log("Event Added")
    }
    catch(err){
        console.log(err)
    }
}

async function loginUser( email, password) {
    try{
        await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem("user", "true")
        console.log("User Logged In")
    }
    catch(err){
        console.log(err)
    }
}

async function updateUser(img, newname){
    try{
        const colRef = doc(db, "User", currentUser.uid)
        if(newname){
            await updateDoc(colRef, { Name: newname })
        }
        else{
            console.log("Username feild is empty my guy")
        }
        const imgRef = ref(storage, `profileImages/${currentUser.uid}` )
        if(img){
            await uploadBytes(imgRef, img)
            const pfp = await getDownloadURL(imgRef)
            setPfp(pfp)
        }
        else{
            console.log("No image selected my guy")
        }
    }
    catch(err){
        console.log("Error in creating user account", err)
    }
}

async function getPfp(user){
    try{
        const imgRef = ref(storage, `profileImages/${user.uid}` )
        const pfp = await getDownloadURL(imgRef)
        setPfp(pfp)
        console.log(pfp)
        localStorage.setItem("user", "true")
    }
    catch(err){
        console.log("Error in getting user pfp", err)
    }
}

async function logoutUser(){
   try{
    await signOut(auth)
    localStorage.removeItem("user")
    console.log("User Singed Out")        
}catch(err){
    console.log("Error in loggin out user", err)
   }
}

async function getEvents(){
   try{
        const colRef =  query(collection(db, "Events"),  orderBy("DayTime", "asc"));
        const querySnapshot = await getDocs(colRef);
        querySnapshot.docs.forEach(event => {
            events.push(event.data())
        })
   }catch(err){
    console.log("Error in fetching events", err)
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
        console.log(user)
        localStorage.setItem("user", "true")

    })
    return () => {
        console.log("Clean-up function");
        unsubscribe();
      };
}, [])

const value = { currentUser, createUser, logoutUser, loginUser , updateUser, pfp, username , events, addEvent , getEvents}

return (
    <authContext.Provider value={value}>
        { children }
    </authContext.Provider>
)
}