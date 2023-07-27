import { useEffect, useState } from "react";
import Loading from "./Loading"

function Quotes(){
    const [dailyQuote, setDailyQuote] = useState("")
    const url = "https://api.api-ninjas.com/v1/quotes";

    async function getQuote(){
    try {

        const request = new Request(url, {
            headers : {
                'X-Api-Key': 'cp+FdIB6pr/XjB41agGIZA==9j6Uwa3DmU1nuY8j'
            }
        })
        
        const response = await fetch(request);
        const data = await response.json();
        if ( response.status == 200) {
            console.log( 'Success: ', response.status, data[0].category, data[0].quote);
            setDailyQuote(data[0].quote)
        }
        else {
            console.log( 'Response error: ', response.status,  response.statusText);
        }
    }

   catch (error) {
        console.log('Quote Fecth error: ', error);
    }
}

useEffect(() => {
    getQuote();
}, [])

    return (
        <main className="p-5 h-full relative overflow-hidden overflow-y-scroll">
            { dailyQuote ? 
            <>
                <h1 className="text-2xl leading-none mb-5">Daily Quote</h1>
                <div>
                    { dailyQuote }
                </div>
            </>
            : <Loading />
            }
        </main>
    )
}

export default Quotes