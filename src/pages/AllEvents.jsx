import Event from "../components/Event"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/authContext"
import { useRef , useEffect} from "react"

function AllEvents() {
    const {getEvents} = useAuth()
    const eventsFetched = useRef(false);

    useEffect(() => {
        if (eventsFetched.current) return;
        eventsFetched.current = true;
        getEvents()
    }, [])

    const { events } = useAuth()

    return(
        <main className="p-5 h-full relative">
             <h1 className="text-2xl leading-none mb-5">Upcoming Events</h1>
            <div className=" w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                { events.map(event =>  <Event Event={ event } key={ event.DayTime }/> )}
            </div>
            <Link to="/events/add">
                <div className="absolute bottom-0 right-0 m-5 rounded-full bg-teal-400 text-zinc-800 cursor-pointer p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </Link>
        </main>
    )
}

export default AllEvents


