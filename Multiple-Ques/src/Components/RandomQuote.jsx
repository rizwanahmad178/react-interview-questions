import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function RandomQuote() {
    const [quote, setQuote] = useState("");
    useEffect(()=>{
        handleClick();
    },[])
    const handleClick=()=>{
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((data) => {
                const randomIndex = Math.floor(Math.random() * data.length);
                setQuote(data[randomIndex]);
            });
    }
  return (
    <div className='container'>
      <h1>Random Quote Generator</h1>
      <blockquote>"{quote.text}"</blockquote>
      <h4>{quote.author}</h4>
      <button className='rqg-btn' onClick={handleClick}>Get New Quote</button>
    </div>
  )
}

export default RandomQuote
