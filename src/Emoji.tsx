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

       const newEmoji = structuredClone(emoji);
        if (newEmoji.comida === 0) {
            newEmoji.vida = Math.max(0, newEmoji.vida - 1) as AtributoType;
        }
        newEmoji.comida = Math.max(0, emoji.comida - 1) as AtributoType;

        if (newEmoji.agua === 0) {
            newEmoji.vida = Math.max(0, newEmoji.vida - 1) as AtributoType;
        }
        newEmoji.agua = Math.max(0, newEmoji.agua - 1) as AtributoType;

        if (newEmoji.luz) {
            if (newEmoji.energia === 0) {
                newEmoji.vida = Math.max(0, newEmoji.vida - 1) as AtributoType;
            }
            newEmoji.energia = Math.max(0, newEmoji.energia - 1) as AtributoType;
        } else {
            newEmoji.energia = Math.min(5, newEmoji.energia + 1) as AtributoType;
        }
        setEmoji(newEmoji);

        
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