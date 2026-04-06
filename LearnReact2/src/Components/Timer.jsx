import React, { useEffect, useState } from 'react'

function Timer() {
    const [seconds, setSecond] = useState(0);
    useEffect(()=>{
        const interval = setInterval (()=>{
            setSecond((prev)=> prev +1);
        }, 1000);
        return () => clearInterval(interval); //clean up
    }, []);
  return <p>Second: {seconds}</p>
}

export default Timer
