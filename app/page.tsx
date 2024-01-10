"use client"
import {useEffect, useState} from "react";
import Decrement from "@/component/Decrement";


const initialCount = () => {
    console.log("初期カウント")
    return 0;
};


export default function Home() {
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            <Decrement count={count} setCount={setCount}/>
        </div>
    );
}
