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
        setEmoji({ ...emoji, agua: Math.min(5, emoji.agua + 1) as AtributoType });    }

    function altenarLuzClick(){
        setEmoji({ ...emoji, luz: !emoji.luz });
    }
    function cicloClick(){ 
        if (emoji.vida === 0) return;

        setEmoji({ ...emoji, comida: Math.max(0, emoji.comida - 1) as AtributoType });
        if (emoji.comida === 0) {
            setEmoji((prevEmoji) => ({ ...prevEmoji, vida: Math.max(0, prevEmoji.vida - 1) as AtributoType }));
        }

        setEmoji((prevEmoji) => ({ ...prevEmoji, agua: Math.max(0, prevEmoji.agua - 1) as AtributoType }));
        if (emoji.agua === 0) {
            setEmoji((prevEmoji) => ({ ...prevEmoji, vida: Math.max(0, prevEmoji.vida - 1) as AtributoType }));
        }
        if (emoji.luz) {
            setEmoji((prevEmoji) => ({ ...prevEmoji, energia: Math.max(0, prevEmoji.energia - 1) as AtributoType }));
            if (emoji.energia === 0) {
                setEmoji((prevEmoji) => ({ ...prevEmoji, vida: Math.max(0, prevEmoji.vida - 1) as AtributoType }));
            }
        } else {
            setEmoji((prevEmoji) => ({ ...prevEmoji, energia: Math.min(5, prevEmoji.energia + 1) as AtributoType }));
        }

        
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