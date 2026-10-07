import { useState } from "react";
import "./Emoji.css";

type EMOJI_KEYS = "happy" | "sick" | "dead";
const EMOJI_MAP = new Map <EMOJI_KEYS, string>([
    ["happy", "🙂"],
    ["sick", "🤢"],
    ["dead", "😵"],
]);



export default function Emoji(){
    
    const [status, setStatus]= useState<EMOJI_KEYS>("sick")

    function happyClick(){
        console.log("Status: ", status);
        console.log("Happy!!");
        setStatus("happy");
        console.log("Status: ", status);

    }

    return (   
        <>
            <div className="emoji">
                {EMOJI_MAP.get(status) || " 🫥"}
            </div>
            <div className="acoes">
                <button onClick={happyClick}>Happy</button>
            </div>
        </> 
    );
}