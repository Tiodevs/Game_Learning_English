import { Link } from 'react-router-dom'
import style from './styles.module.css'

export default function BtnGame(props) {
    return (

        <div className={style.gameCard}>
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
            <Link className={style.btn} to={props.URL}>JOGAR</Link>
        </div>

    )
}