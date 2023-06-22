import style from './styles.module.css'

export default function BtnGame(props) {
    return (

        <div className={style.gameCard}>
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
            <a className={style.btn} href="" target="_blank">JOGAR</a>
        </div>

    )
}