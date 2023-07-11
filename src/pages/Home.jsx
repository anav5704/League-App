import { useAuth } from "../contexts/authContext"
import { Navigate } from "react-router-dom"


function Home() {
    const { createUser, currentUser } = useAuth()
    
    async function login(){
        await createUser()
    }

    return ( sessionStorage.getItem("user") ? 
    <Navigate replace={true}  to="/account" />
    :   
     <div className="h-screen w-screen grid place-content-center">
        <button onClick={() => {login()}} className="hover:bg-zinc-600 bg-zinc-800 p-2 rounded-md text-2xl border border-zinc-600">Sign In w Google</button>
    </div>
     )
}

export default Home