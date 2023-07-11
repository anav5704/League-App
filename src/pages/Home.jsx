import { useState, useRef } from "react"
import { useAuth } from "../contexts/authContext"
import { Navigate } from "react-router-dom"


function Home() {
    const { createUser, sigupUser, loginUser } = useAuth()
    const [signup, setSignup] = useState(" ")
    const [img, setImg] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const imgref = useRef(null)

    async function sigup(e){
        e.preventDefault()
        await createUser(name, email, password, img)
    }

    async function login(e){
        e.preventDefault()
        await loginUser( email, password)
    }

    function handleImg(){
        imgref.current.click()
    }

    function handleImgChange(e){
        const file = e.target.files[0]
        setImg(file)
    }

    return ( sessionStorage.getItem("user") ? 
    <Navigate replace={true}  to="/account" />
    :   
    
    <div className="w-screen h-screen grid place-content-center">
        { signup ? 
        <div className="bg-zinc-800 p-3 rounded-md   w-72">
            <h1 className="text-2xl text-center">Sign Up</h1>
            <form  onSubmit={(e) => (sigup(e))} action="" className="flex flex-col items-center">
            <div onClick={() => {handleImg()}} className=" cursor-pointer h-24 w-24 grid place-content-center my-3 mx-auto bg-zinc-700 rounded-md overflow-hidden text-zinc-400">
                    { img ? <img src={URL.createObjectURL(img)} alt="" className="h-full w-full"/>
                    : 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>                                    
                    }
                    <input accept="image/*" onChange={(e)=> handleImgChange(e)} type="file" ref={imgref} name="" id="" className="hidden" />    
                    </div>  
            <input  onChange={(e) => {setName(e.target.value)}} placeholder="Username" type="text"  className="w-full outline-none p-1 border-b border-zinc-600 bg-zinc-800"/>
            <input  onChange={(e) => {setEmail(e.target.value)}} placeholder="E-mail" type="email"  className="w-full outline-none mt-3 p-1 border-b border-zinc-600 bg-zinc-800"/>
            <input onChange={(e) => {setPassword(e.target.value)}} placeholder="New Password" type="password"  className="w-full outline-none mt-3 p-1 border-b border-zinc-600 bg-zinc-800"/>
            <button  type="submit" className="mt-5 mb-3 rounded-md border border-zinc-600 py-2 px-4 hover:bg-zinc-700">Create Account</button>
            <p className="text-zinc-400">Already have an account? <span className="text-teal-400 cursor-pointer" onClick={() => {setSignup(!signup)}} >Log In</span></p>
            </form>
        </div> 
        :
        <div className="bg-zinc-800 p-3 rounded-md   w-72">
        <h1 className="text-2xl text-center">Log In</h1>
        <form onSubmit={(e) => {login(e)}} action="" className="flex flex-col items-center">
        <input  onChange={(e) => {setEmail(e.target.value)}} placeholder="E-mail" type="email"  className="w-full outline-none mt-3 p-1 border-b border-zinc-600 bg-zinc-800"/>
        <input onChange={(e) => {setPassword(e.target.value)}} placeholder="New Password" type="password"  className="w-full outline-none mt-3 p-1 border-b border-zinc-600 bg-zinc-800"/>
        <button type="submit"className="mt-5 mb-3 rounded-md border border-zinc-600 py-2 px-4 hover:bg-zinc-700">Log In</button>
        <p className="text-zinc-400">Don't have an account? <span className="text-teal-400 cursor-pointer" onClick={() => {setSignup(!signup)}} >Sign Up</span></p>
        </form>
    </div>  }
    </div>

    )
}

export default Home