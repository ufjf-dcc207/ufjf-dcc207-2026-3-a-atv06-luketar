import { useState } from "react";
import "./Emoji.css";
import Atributo from "./Atributo";

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

    function sickClick(){
        console.log("Status: ", status);
        console.log("Sick!!");
        setStatus("sick");
        console.log("Status: ", status);

    }

    function deadClick(){
        console.log("Status: ", status);
        console.log("Dead!!");
        setStatus("dead");
        console.log("Status: ", status);

    }
    function cicleClick(){    
        switch(status){
            case "dead":
                setStatus("happy");
                break;
            case "happy":
                setStatus("sick");
                break;
            case "sick":
                setStatus("dead");
                break;
                
            default:
                setStatus("happy");
        }

        
    }

    console.log("Desenhando...");
    console.log("Status: ", status);

    return (   
        <>
            <div className="emoji">
                {EMOJI_MAP.get(status) || " 🫥"}
            </div>
            <Atributo />
            <div className="acoes">
                <button onClick={happyClick}>Happy</button>
                <button onClick={sickClick}>Sick</button>
                <button onClick={deadClick}>Dead</button>
                <button onClick={cicleClick}>Cicle</button>
            </div>
        </> 
    );
}