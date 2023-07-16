import Event from "../components/Event"

function Events() {
    return(
        <main className="p-5 h-full">
             <h1 className="text-2xl leading-none mb-3">Upcoming Events</h1>
            <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                <Event />
            </div>
        </main>
    )
}

export default Events


