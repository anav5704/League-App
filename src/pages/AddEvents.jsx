import Event from "../components/Event"
import { Link } from "react-router-dom"

function AddEvents() {
    return(
        <main className="p-5 h-full relative">
             <h1 className="text-2xl leading-none mb-5">Create New Event</h1>
            <div className=" w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            </div>
            <Link to="/events/all">
                <div className="absolute bottom-0 right-0 m-5 rounded-full bg-teal-400 text-zinc-800 cursor-pointer p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
            </Link>
        </main>
    )
}

export default AddEvents


