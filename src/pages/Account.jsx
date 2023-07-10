import { useRef, useState } from "react"
import { useAuth } from "../contexts/authContext"

function Account() {
    const {  currentUser } = useAuth()
    const imgref = useRef(null)
    const [edit, setEdit] = useState()
    const [img, setImg] = useState()

    function handleImg(){
        imgref.current.click()
    }

    function handleImgChange(e){
        const file = e.target.files[0]
        setImg(file)
    }

    return( currentUser ?
       <>
        <main className="p-5">
            <div className="p-3 bg-zinc-800 rounded-md w-fit">
                <h1 className="text-2xl leading-none">User Profile</h1>
                <div className="flex items-start my-3 ">
                    { !edit ? <img src={currentUser.photoURL} alt="" className="rounded-md h-24 aspect-square mr-5" /> 
                    : <div onClick={() => {handleImg()}} className="h-24 aspect-square mr-5 bg-zinc-700 rounded-md overflow-hidden cursor-pointer grid place-content-center">
                        { img ? <img src={ URL.createObjectURL(img) } alt="" className="h-full w-full"/>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        }
                        <input accept="image/*" onChange={(e)=> handleImgChange(e)} type="file" ref={imgref} name="" id="" className="hidden" />
                    </div>  }
                    <div className="w-48">
                        <p className="text-zinc-400 ">Username</p>
                        { !edit ? <p>{currentUser.displayName} </p> : <input type="text" className="editName"/> }
                        <p className="text-zinc-400">Email</p>
                        <p>{currentUser.email}</p>
                    </div>
                </div>
                { !edit? <button onClick={() => {setEdit(!edit)}} className="bg-zinc-700 rounded-md px-2 py-1 w-full hover:text-teal-400">Edit Profile</button>
                   : <button onClick={() => {setEdit(!edit)}} className="bg-zinc-700 rounded-md px-2 py-1 w-full hover:text-teal-400">Save Changes</button>
                }
            </div>
        </main> 
       </>
        : null
    )
}

export default Account