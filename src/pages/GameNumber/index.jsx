import Nav from "../../components/nav/nav";
import style from './styles.module.css'
import divisor from '../../assets/DivisorGame.svg'
import { useState } from "react";

export default function GameNamber() {

    const [valorMin,setValorMin] = useState(0)
    const [valorMax,setValorMax] = useState(0)

    function Modal(){
        var valorAleatorio = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMax;
        console.log("numero min:", valorMin, "numero max:", valorMax, "teste:",valorMin - valorMax,valorAleatorio)
    }

    function start() {
        if(valorMin>valorMax){
            alert("Erro, você colocou um valor minimo maior que o valor maximo")
        }if (valorMin<0) {
            alert("Erro, você colocou um valor minimo menor que zero...")
        } if (valorMax>5000) {
            alert("Erro, você colocou um valor maximo maior que 5000...")
        }else {
            Modal()
        }
    }

    return (
        <>
            <Nav />
            <div className={style.conteudo}>
                <div className={style.titulo}>
                    <h1>NÚMEROS</h1>
                    <img src={divisor} alt="Divisor do titulo" className={style.divisor} />
                    <p id={style.paragrafo}>Escolha o intervalos de númeors que deseja sortear, não pode ser menor que 0 ou mais que 5 mil</p>
                </div>

                <div className={style.form}>
                    <div className={style.pergunta}>
                        <label htmlFor="valorMin">Número inicial</label>
                        <input 
                        type="number" 
                        id="valorMin" 
                        min={1} 
                        max={5000}
                        value={valorMin} 
                        onChange={(ev) => setValorMin(ev.target.value)}/>
                    </div>
                    <div className={style.pergunta}>
                        <label htmlFor="valorMax">Número maximo</label>
                        <input 
                        type="number" 
                        id="valorMax" 
                        min={valorMin} 
                        max={5000} 
                        value={valorMax} 
                        onChange={(ev) => setValorMax(ev.target.value)}/>
                    </div>

                    <div>
                        <button onClick={start}>
                            GERAR NÚMERO
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}