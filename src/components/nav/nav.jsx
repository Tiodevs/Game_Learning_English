import { Link, NavLink } from "react-router-dom";
import styles from './nav.css'

import iconInstagram from '../../assets/nav/IconInstagram.svg'
import iconGitHub from '../../assets/nav/IconGitHub.svg'
import iconHome from '../../assets/nav/IconHome.svg'
import iconDocuments from '../../assets/nav/IconDocuments.svg'
import iconGames from '../../assets/nav/IconGames.svg'
import iconConquista from '../../assets/nav/IconConquista.svg'
import iconLanguages from '../../assets/nav/IconLanguages.svg'
import iconTheme from '../../assets/nav/IconTheme.svg'
import iconLogin from '../../assets/nav/IconLogin.svg'
import divisor from '../../assets/nav/Divisor.svg'


export default function Nav() {

    return (
        <nav>
            <a href="https://www.instagram.com/somente_ofelipe/" target="_blank">
                <img src={iconInstagram} alt="Icone Intagram" />
            </a>
            <a href="https://github.com/Tiodevs" target="_blank">
                <img src={iconGitHub} alt="Icone GitHub" />
            </a>

            <div className="divisor">
    
            </div>

            <NavLink to={`/`} className={({ isActive }) => isActive ? "active" : ""}>
                <img src={iconHome} alt="Icone para pagina home" />
            </NavLink>
            <NavLink to={`/about`} className={({ isActive }) => isActive ? "active" : ""}>
                <img src={iconDocuments} alt="Icone para pagina home" />
            </NavLink>
            <NavLink to={`/games`} className={({ isActive }) => isActive ? "active" : ""}>
                <img src={iconGames} alt="Icone para pagina home" />
            </NavLink>
            <NavLink to={`/conquistas`} className={({ isActive }) => isActive ? "active" : ""}>
                <img src={iconConquista} alt="Icone para pagina home" />
            </NavLink>

            <div className="divisor">
            
            </div>

            <img src={iconLanguages} alt="Icone para pagina home" />
            <img src={iconTheme} alt="Icone para pagina home" />
            <img src={iconLogin} alt="Icone para pagina home" />
        </nav>
    )
}