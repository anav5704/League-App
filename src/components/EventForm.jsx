import { useState } from "react"

function EventForm(){

    const [event, setEvent] = useState("")
    const [title, setTitle] = useState("")
    const [venue, setVenue] = useState("")
    const [daytime, setDaytime] = useState("")

    return (
    <form  onSubmit={(e) => (sigup(e))} action="" className="p-3 flex flex-col items-center col-span-1 bg-zinc-800 rounded-md overflow-hidden w-80">
        <h1 className="text-2xl text-center my-3">Create New Event</h1>
        <div className="flex w-full gap-3 mb-3">
            <div onClick={() => setEvent("Movie")} className={` ${event == "Movie" ? "bg-teal-400 text-zinc-800"  : "bg-zinc-800 text-teal-400" } w-full grid place-content-center cursor-pointer h-24 rounded-md hover:bg-teal-400 hover:text-zinc-800`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
            </div>
            <div onClick={() => setEvent("Meet")} className={` ${event == "Meet" ? "bg-teal-400 text-zinc-800"  : "bg-zinc-800 text-teal-400" } w-full grid place-content-center cursor-pointer h-24 rounded-md hover:bg-teal-400 hover:text-zinc-800`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            </div>
        </div>
        <input  onChange={(e) => {setTitle(e.target.value)}} placeholder="Title" type="text"  className="w-full outline-none p-1 border-b border-zinc-600 bg-zinc-800"/>
        <input  onChange={(e) => {setVenue(e.target.value)}} placeholder="Venue" type="email"  className="w-full outline-none mt-3 p-1 border-b border-zinc-600 bg-zinc-800"/>
        <input  onChange={(e) => {setDaytime(e.target.value)}} placeholder="Day & Time" type="email"  className="w-full outline-none mt-3 p-1 border-b border-zinc-600 bg-zinc-800"/>
        <button  type="submit" className="mt-5 mb-2 rounded-md border border-zinc-600 py-2 px-4 hover:bg-zinc-700">Add Event</button>
    </form>
    )
}

export default EventForm