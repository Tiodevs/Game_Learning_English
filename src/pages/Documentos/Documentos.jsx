import Nav from "../../components/nav/nav";
import style from './styles.module.css'

export default function Documentos() {
    return (
        <>
            <Nav />
            <div className={style.conteudo}>
                <div className={style.esquerda}>
                    <h1>Documentos <br/> sobre ingles</h1>
                    <a className={style.btn} target="_blank" href="https://1drv.ms/f/s!AhjtqPcqdm-mha1MuBYNvkCu7VSdPQ?e=ZW3Ciz">BAIXAR</a>
                </div>
            </div>

        </>
    )
}