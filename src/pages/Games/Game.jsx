
import Nav from "../../components/nav/nav";
import divisor from '../../assets/DivisorGame.svg'
import style from './styles.module.css'
import BtnGame from "../../components/btnGame/Index";


export default function Game() {
    return (
        <>
            <Nav />
            <div className={style.conteudo}>
                <div className={style.titulo}>
                    <h1>Menu de jogos</h1>
                    <img src={divisor} alt="Divisor do titulo" className={style.divisor} />
                    <p id={style.paragrafo}>Escolha o jogo que você quer jogar e siga as instruções</p>
                </div>

                <div className={style.games}>
                    <div className={style.card}>
                        <BtnGame
                            titulo="NÚMEROS"
                            descricao="O jogo vai sortear um número e o seu desafio vai ser lembrar como se escreve e como se lê." />
                    </div>
                    <div className={style.card}>
                        <BtnGame
                            titulo="CORES"
                            descricao="O jogo vai sortear um número e o seu desafio vai ser lembrar como se escreve e como se lê." />
                    </div>
                    <div className={style.card}>
                        <BtnGame
                            titulo="ROUPAS"
                            descricao="O jogo vai sortear um número e o seu desafio vai ser lembrar como se escreve e como se lê." />
                    </div>
                    <div className={style.card}>
                        <BtnGame
                            titulo="PARTES DO CORPO"
                            descricao="O jogo vai sortear um número e o seu desafio vai ser lembrar como se escreve e como se lê." />
                    </div>

                </div>
            </div>

        </>
    )
}