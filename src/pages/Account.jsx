import { useAuth } from "../contexts/authContext"

function Account() {
    const {  currentUser } = useAuth()

    return( currentUser ?
        <div className="p-5">
            <di className="flex justify-between items-center">
                <h1 className="text-2xl">User Profile</h1>
                <button className="border border-zinc-600 py-2 px-4 rounded-md bg-zinc-800 hover:bg-zinc-900">Save</button>
            </di>
            <img src={currentUser.photoURL} alt="" className="rounded-full" />
        </div> 
        : null
    )
}

export default Account