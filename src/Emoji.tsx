import { useState } from "react";
import "./Emoji.css";
import Atributo from "./Atributo";
import type { AtributoType, EMOJI_KEYS, EmojiType } from "./types";

const EMOJI_MAP = new Map <EMOJI_KEYS, string>([
    ["happy", "🙂"],
    ["sick", "🤢"],
    ["dead", "😵"],
]);



export default function Emoji(){
    
    const [emoji, setEmoji] = useState<EmojiType>({
        agua: 1,
        comida: 2,
        energia: 3,
        luz: true,
        vida: 5
    });

    function alimentarClick() {
        if (emoji.vida === 0) return;
        const novoEmoji = structuredClone(emoji);
        novoEmoji.comida = Math.min(5, emoji.comida + 1) as AtributoType;
        setEmoji(novoEmoji);
    }

    function hidratarClick() {
        if (emoji.vida === 0) return;
        setEmoji({...emoji, agua: Math.min(5, emoji.agua + 1) as AtributoType});
    }

    function altenarLuzClick(){
        setEmoji({...emoji, luz: !emoji.luz});

    }
    function cicloClick(){ 
        //if(vida === 0) return;   
        //setComida(Math.max(0, comida - 1));
        //if (comida === 0) {
        //    setVida(Math.max(0, vida - 1));
        //}
        //setAgua(Math.max(0, agua - 1));
        //if (agua === 0) {
        //    setVida((prevVida) => Math.max(0, prevVida - 1));
        //}
        //if (luz) {
        //    setEnergia(Math.max(0, energia - 1));
        //    if (energia === 0) {
        //        setVida((prevVida) => Math.max(0, prevVida - 1));
        //    }
        //} else {
        //    setEnergia(Math.min(5, energia + 1));
        //}

        
    }

    let status = EMOJI_MAP.get("happy");
    if (emoji.agua === 0 || emoji.comida === 0 || emoji.energia === 0) {
        status = EMOJI_MAP.get("sick");
    }
    if (emoji.vida === 0) {
        status = EMOJI_MAP.get("dead");
    }


    return (   
            <div className="emoji">
            <div className="face">
                {status}
            </div>
            <div className="atributos">
                <Atributo icone="❤️" valor={emoji.vida} />
                <Atributo icone="🔋" valor={emoji.energia} />
                <Atributo icone="💧" valor={emoji.agua} />
                <Atributo icone="🍗" valor={emoji.comida} />
                {emoji.luz && "💡"}
            </div>
            <div className="acoes">
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={altenarLuzClick}>Ligar Luz</button>
                <button onClick={altenarLuzClick}>{emoji.luz ? 'Desligar' : 'Ligar'} Luz</button>                <button onClick={cicloClick}>Ciclo</button>
            </div>
        </div> 
    );
}