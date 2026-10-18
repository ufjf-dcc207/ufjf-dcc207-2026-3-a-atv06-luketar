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
    const [vida, setVida] = useState<number>(5);
    const [energia, setEnergia] = useState<number>(4);
    const [comida, setComida] = useState<number>(1);
    const [agua, setAgua] = useState<number>(2);
    const [luz, setLuz] = useState<boolean>(true);

    function alimentarClick() {
        setComida(Math.min(5, comida + 1));
    }

    function hidratarClick() {
        setAgua(Math.min(5, agua + 1));
    }

    function altenarLuzClick(){
        setLuz(!luz);

    }
    function cicloClick(){    
        if (luz) {
            setEnergia(Math.max(0, energia - 1));
        } else {
            setEnergia(Math.min(5, energia + 1));
        }

        
    }

    console.log("Desenhando...");
    console.log("Status: ", status);

    return (   
            <div className="emoji">
            <div className="face">
                {EMOJI_MAP.get(status) || " 🫥"}
            </div>
            <div className="atributos">
                <Atributo icone="❤️" valor={vida} />
                <Atributo icone="🔋" valor={energia} />
                <Atributo icone="💧" valor={agua} />
                <Atributo icone="🍗" valor={comida} />
                {luz && "💡"}
            </div>
            <div className="acoes">
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={altenarLuzClick}>Ligar Luz</button>
                <button onClick={altenarLuzClick}>{luz ? 'Desligar' : 'Ligar'} Luz</button>
                <button onClick={cicloClick}>Ciclo</button>
            </div>
        </div> 
    );
}