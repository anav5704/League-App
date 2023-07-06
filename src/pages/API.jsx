import { Link, useLoaderData } from "react-router-dom"

function API() {
    const data = useLoaderData()
    console.log(data)
    return(
        <h1>{ data.data.map( data => 
        (<Link to={data.mal_id.toString()} key={data.mal_id}>
            <p>{data.title}</p>
        </Link>)) }</h1>
    )
}

export default API

// Loader Functions
export async function apiLoader() {
    const res = await fetch("https://api.jikan.moe/v4/anime")
    return res.json()
}
