import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"


export default function QuoteFetcherLoader() {

    const [quote, setQuote] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function(){
        async function fetchQuote() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const randomQuote = jsonResponse.quote;
            setQuote(randomQuote);
            setIsLoading(false);
        }
        fetchQuote();

    }, [])


    return (
        <div>
            <p className="Loader" style={{opacity: isLoading ? 1 : 0}}>Loading...</p>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}