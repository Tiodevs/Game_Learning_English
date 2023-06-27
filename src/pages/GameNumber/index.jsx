import Nav from "../../components/nav/nav";
import { useState } from "react";
import style from './styles.module.css'

import divisor from '../../assets/DivisorGame.svg'
import btnVolume from '../../assets/BtnVolume.svg'
import btnText from '../../assets/BtnText.svg'
import btnClose from '../../assets/BtnClose.svg'

export default function GameNamber() {

    // Formulario
    const [valorMin, setValorMin] = useState(0)
    const [valorMax, setValorMax] = useState(0)
    const [valorAleatorio, setValorAleatorio] = useState(0)

    // Modal
    const [isOpen, setIsOpen] = useState(false)
    const [textOpen, setTextOpen] = useState(false)
    const [textForExtenso, setTextForExtenso] = useState(0)

    function sintetizarFala() {
        if(textOpen === false){
            escreverNumeroPorExtenso()
            setTextOpen(false)
        }
        var texto = textForExtenso
        console.log("audio: ", texto)
        // Criando um objeto de fala
        var mensagem = new SpeechSynthesisUtterance(texto);

        // Definindo as configurações da fala (opcional)
        mensagem.lang = "en"; // Configurando o idioma da fala
        mensagem.rate = 0.8;

        // Sintetizando a fala
        window.speechSynthesis.speak(mensagem);
    }

    function escreverNumeroPorExtenso() {
        var unidades = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        var especiais = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        var dezenas = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        var centenas = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
        var milhares = ['', 'one thousand', 'two thousand', 'three thousand', 'four thousand', 'five thousand'];
        if (valorAleatorio < 0 || valorAleatorio > 5000) {
            console.log('Number out of valid range.');
            return;
        }

        var numeroPorExtenso = '';

        if (valorAleatorio === 0) {
            numeroPorExtenso = 'zero';
        } else if (valorAleatorio >= 1 && valorAleatorio <= 9) {
            numeroPorExtenso = unidades[valorAleatorio];
        } else if (valorAleatorio >= 10 && valorAleatorio <= 19) {
            numeroPorExtenso = especiais[valorAleatorio - 10];
        } else if (valorAleatorio >= 20 && valorAleatorio <= 99) {
            var dezena = Math.floor(valorAleatorio / 10);
            var unidade = valorAleatorio % 10;

            numeroPorExtenso = dezenas[dezena];

            if (unidade !== 0) {
                numeroPorExtenso += '-' + unidades[unidade];
            }
        } else if (valorAleatorio >= 100 && valorAleatorio <= 999) {
            var centena = Math.floor(valorAleatorio / 100);
            var dezena = Math.floor((valorAleatorio % 100) / 10);
            var unidade = valorAleatorio % 10;

            numeroPorExtenso = centenas[centena];

            if (dezena !== 0) {
                numeroPorExtenso += ' ' + dezenas[dezena];

                if (unidade !== 0) {
                    numeroPorExtenso += '-' + unidades[unidade];
                }
            } else if (unidade !== 0) {
                numeroPorExtenso += ' and ' + unidades[unidade];
            }
        } else if (valorAleatorio >= 1000 && valorAleatorio <= 5000) {
            var milhar = Math.floor(valorAleatorio / 1000);
            var centena = Math.floor((valorAleatorio % 1000) / 100);
            var dezena = Math.floor((valorAleatorio % 100) / 10);
            var unidade = valorAleatorio % 10;

            numeroPorExtenso = milhares[milhar];

            if (centena !== 0) {
                numeroPorExtenso += ' ' + centenas[centena];

                if (dezena !== 0) {
                    numeroPorExtenso += ' ' + dezenas[dezena];

                    if (unidade !== 0) {
                        numeroPorExtenso += '-' + unidades[unidade];
                    }
                } else if (unidade !== 0) {
                    numeroPorExtenso += ' and ' + unidades[unidade];
                }
            } else if (dezena !== 0) {
                numeroPorExtenso += ' and ' + dezenas[dezena];

                if (unidade !== 0) {
                    numeroPorExtenso += '-' + unidades[unidade];
                }
            } else if (unidade !== 0) {
                numeroPorExtenso += ' and ' + unidades[unidade];
            }
        }
        setTextForExtenso(numeroPorExtenso)
        setTextOpen(true)
        console.log(textForExtenso)
    }

    function Modal() {
        if (valorMin < 0) {
            alert("Você colocou um numero negativo isso viola uma regra.")
            return null
        } else if (valorMax > 5000) {
            alert("Você colocou um valor maior que 5000 isso viola uma regra")
            return null
        } else if (valorMin > valorMax) {
            alert("Você colocou o valor inicial maior que o valor maximo isso viola uma regra")
            return null
        }
        var gerarValorAleatorio = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
        setValorAleatorio(gerarValorAleatorio)
        openModal()

    }

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setTextOpen(false)
    };

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
                            onChange={(ev) => setValorMin(ev.target.value)} />
                    </div>
                    <div className={style.pergunta}>
                        <label htmlFor="valorMax">Número maximo</label>
                        <input
                            type="number"
                            id="valorMax"
                            min={0}
                            max={5000}
                            value={valorMax}
                            onChange={(ev) => setValorMax(ev.target.value)} />
                    </div>

                    <div>
                        <button onClick={Modal}>
                            GERAR NÚMERO
                        </button>
                    </div>

                </div>
            </div>

            <div className={isOpen ? style.modal : style.closeModal}>
                <div className={style.modalContent}>
                    <h1>{valorAleatorio}</h1>
                    <p className={textOpen ? style.textExtenso : style.textExtensoClose}>{textForExtenso}</p>
                    <p >Aperte no icone de texto para exibir o número por extenso ou aperte o icone do som para escutar a pronuncia</p>
                    <div className={style.btnsModal}>
                        <div>
                            <button onClick={sintetizarFala}>
                                <img src={btnVolume} alt="" />
                            </button>
                            <button onClick={escreverNumeroPorExtenso}>
                                <img src={btnText} alt="" />
                            </button>
                        </div>

                        <button onClick={closeModal}>
                            <img src={btnClose} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}