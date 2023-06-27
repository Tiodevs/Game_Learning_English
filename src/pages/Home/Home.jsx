
import Nav from "../../components/nav/nav";
import style from './styles.module.css'

import imgHome from '../../assets/imgHome.svg'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Nav />
            <div className={style.conteudo}>
                <div className={style.esquerda}>
                    <h1>Aprenda ingles<br/>com jogos</h1>
                    <p>Bem-vindo ao nosso site de mini jogos para aprender inglês! Aqui, você encontrará uma forma divertida e interativa de aprimorar suas habilidades no idioma enquanto se diverte. Nossa plataforma oferece uma variedade de jogos educativos projetados para estimular seu vocabulário, compreensão auditiva, leitura e escrita em inglês.</p>

                    <Link to={'/games'} className={style.btn1} href="https://1drv.ms/f/s!AhjtqPcqdm-mha1MuBYNvkCu7VSdPQ?e=ZW3Ciz">Jogar</Link>

                </div>
                {/* <div className="direita">
                <img src={imgHome} alt="" />
                </div> */}
            </div>

        </>
    )
}