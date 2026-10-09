
import { useState } from "react";
import "./Atributo.css";




export default function Atributo(){
    const[valor, setValor] = useState<number>(0);

    function valores(){
        if(valor === 5){
            setValor(0);
        }
        else{
            setValor(valor + 1);
        }
    }
    return(
        <div className="atributo">
            {valor}{"❤️".repeat(valor)}
            <span className="inativo">{"❤️".repeat(5-valor)}</span>
            <button onClick={valores}>+</button>
        </div>
    )
    

}