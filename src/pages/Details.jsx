import { useParams, useLoaderData } from "react-router-dom"

function Details() {
    const data = useLoaderData()
    console.log(data)
    const { id } = useParams()
    return(
        <img src={data.data.images.jpg.image_url} alt="" />
    )
}

export default Details

export async function detailsLoader({ params }) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${params.id}/full`)

    if (!res.ok) {
        throw Error ("Error from Element: Does not exist")
    }

    return res.json()
}
