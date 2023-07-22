import Event from "../components/Event"
import Loading from "./Loading"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/authContext"

function AllEvents() {

    const { events } = useAuth()
    const upcoming = events.filter(event => event.DayTime.seconds*1000 > new Date)
    const finished = events.filter(event => event.DayTime.seconds*1000 < new Date)

    return(
    <main className="p-5 h-full overflow-y-scroll relative">
    { events.length ? 
    <>
       <h1 className="text-2xl leading-none mb-5">Upcoming Events</h1>
      <div className=" w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mb-5">
          { upcoming.map(event =>  <Event Event={ event } key={ event.DayTime }/> )}
      </div>
      <h1 className="text-2xl leading-none my-5">Finished Events</h1>
      <div className=" w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mb-5">
          { finished.map(event =>  <Event Event={ event } key={ event.DayTime }/> )}
      </div>


      <Link to="/events/add">
          <div className="fixed bottom-0 right-0 mb-20 lg:mb-5 m-5 rounded-full bg-teal-400 text-zinc-800 cursor-pointer p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
          </div>
      </Link> 
      </>
      : <Loading /> }
    </main>
    )
}

export default AllEvents


