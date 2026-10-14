
import { useState } from "react";
import "./Atributo.css";

type AtributosProps = {
    icone: String;
};

export default function Atributo({icone} : AtributosProps){
    const[valor, setValor] = useState<number>(0);


    return(
        <div className="atributo">
            {valor}{icone.repeat(valor)}
            <span className="inativo">{icone.repeat(5-valor)}</span>
            <button onClick={() => {
                setValor((v) => {
                    if (v === 5) {
                        return 0;
                    } else {
                        return v + 1;
                    }
                });
                setValor((prevValor) => {
                    if (prevValor === 5) {
                        return 0;
                    } else {
                        return prevValor + 1;
                    }
                });
            }}>+</button>
        </div>
    )
    

}