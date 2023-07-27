import { useEffect, useState } from "react";
import Quote from "../components/Quote";
import Loading from "./Loading"

function Quotes(){
    const [dailyQuote, setDailyQuote] = useState("")
    const url = "https://api.api-ninjas.com/v1/quotes";

    const quotes = [
        "When life hits you, hit back. - Veer Chandra.",
        "Don't look for yourself, look AT yourself. - Veer Chandra.",
        "That's not a navbar, that's a navBLOCK! - Veer Chandra.",
        "Caught in 4k your sona! - Veer Chandra.",
        "You made a talkative person speechless today. (to Anav) - Veer Chandra.",
        "There's two things I can't do: stop thinking and stop talking. - Veer Chandra.",
        "It's on a incline because you only go up from this moment. (refering to the tilted 3 on Anav's 3rd place trophy) - Veer Chandra.",
        "Alls fair in love and war brother. - Veer Chandra.",
        "Why think outside the box when you can think outside the parallelogram. - Veer Chandra.",
        "Why do you want power? The only power in the temple is God. - Veer Chandra.",
        "Who even is Renyeta?!? - Veer Chandra.",
        "We are the AV cable, audio visual cable. You're blind and I'm deaf. (to Anav) - Veer Chandra.",
        "I didn't eat the nutella, I AM THE NUTELLA! - Rohan Nandan.",
        "The road to success is long, but my pe*is is longer. - Rohan Nandan.",
        "First tribe? More like sinking tribe. (to Meake) - Rohan Nandan.",
        "Hey girl, you sexy. Want s*x? - Mesake Tofiga.",
        "Balls. - Vetaia Maimanuku.",
        "Deez nuts. - Vetaia Maimanuku.",
        "Your mum. - Vetaia Maimanuku.",
        "Sab SKILLS mange. - Anav Chand.",
        "I'm blind. - Anav Chand.",
        "Who even is Rainieta?!? - Anav Chand.",
        "Damn...that's crazy! - Anav Chand.",
        "You sir...get no bi*ches! - Danvil Singh.",
        "Bo*i Bo*i Bo*i Bo*i Bo*i Bo*i Bo*i Bo*i - Indeevar Nair.",
        "My friends helped open my eyes when I wasn't able to see. - Indeevar Nair.",
        "It was only after losing his vision, Anav was truly able to see. - Indeevar Nair.",
        "It's cool to be good at many things, but it's better to be the best at one thing. - JNC DUX 2022.",
        "No Island??? (to Mesake) - Illisoni.",
        "I don't like stealing things unless it's someones girl ;) - Rudr Prasad.",
    ]

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
            setDailyQuote(`${data[0].quote} - ${data[0].author}`)
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
                    <Quote quote={ dailyQuote }/>
                </div>
                <h1 className="text-2xl leading-none my-5">League Members' Quotes</h1>
                <div className="flex flex-wrap gap-5">
                    { quotes.map(quote => <Quote quote={ quote }/> )}
                </div>
            </>
            : <Loading />
            }
        </main>
    )
}

export default Quotes