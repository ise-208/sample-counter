"use client"
import {useEffect, useState} from "react";


const initialCount = () => {
    console.log("初期カウント")
    return 0;
};


export default function Home() {
    const [count, setCount] = useState(initialCount);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <h2> カウンター {count}</h2>
        </div>
    );
}
