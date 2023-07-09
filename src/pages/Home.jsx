import { useAuth } from "../contexts/authContext"
import { Navigate } from "react-router-dom"


function Home() {
    const { createUser, currentUser } = useAuth()
    
    async function login(){
        await createUser()
    }

    return ( !currentUser? 
        <div className="">
                <button onClick={() => {login()}} className="hover:bg-zinc-600 p-2 rounded-md text-2xl ">Sign In w Google</button>
        </div>
     :  <Navigate replace={true}  to="/account" />  )
}

export default Home