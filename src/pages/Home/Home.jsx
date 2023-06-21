
import Nav from "../../components/nav/nav";
import style from './Home.css'

import imgHome from '../../assets/imgHome.svg'

export default function Home() {
    return (
        <>
            <Nav />
            <div className="conteudo">
                <div className="esquerda">
                    <h1>Aprenda ingles<br/>com jogos</h1>
                    <p>Bem-vindo ao nosso site de mini jogos para aprender inglês! Aqui, você encontrará uma forma divertida e interativa de aprimorar suas habilidades no idioma enquanto se diverte. Nossa plataforma oferece uma variedade de jogos educativos projetados para estimular seu vocabulário, compreensão auditiva, leitura e escrita em inglês.</p>
                </div>
                {/* <div className="direita">
                <img src={imgHome} alt="" />
                </div> */}
            </div>

        </>
    )
}