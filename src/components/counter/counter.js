import { useEffect, useState } from "react";
import React from 'react'
import './counter.css'



function Counter() {
    function loadCounter() {
        fetch('https://43973re9q5.execute-api.us-east-1.amazonaws.com/dev', {
            method: "POST", // // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(
            { record_count: '1'}
            )
        })
            .then(res => {
                if (res.ok) { console.log("HTTP request successful") }
                else { console.log("HTTP request unsuccessful") }
                return res
            })
            .then(res => res.json())
            .then(data => setCount(data))
            .catch(error => console.log(error))
    }

    const [count, setCount] = useState([]);
    useEffect(() => {
        loadCounter();
    
    }, []);   
    
    return <h1 className="counter">You are visitor number {count} </h1>;
    
}


export default Counter