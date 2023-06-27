
// Dependencias
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from './styles.module.css'

// Icones
import iconInstagram from '../../assets/nav/IconInstagram.svg'
import iconGitHub from '../../assets/nav/IconGitHub.svg'
import iconHome from '../../assets/nav/IconHome.svg'
import iconDocuments from '../../assets/nav/IconDocuments.svg'
import iconGames from '../../assets/nav/IconGames.svg'
import iconConquista from '../../assets/nav/IconConquista.svg'
import iconLogin from '../../assets/nav/IconLogin.svg'
import menuBurger from '../../assets/nav/menuBurger.svg'



export default function Nav() {

    // Variavel que controla se o menu responsivo vai ser exibido
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ArryFunction para mudar o valor da variavel que exibe o menu
    const ativarMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={isMenuOpen ? styles.open : styles.menuItems}>

                {/* Botão para alternar o menu em telas menores */}
                <button onClick={ativarMenu} className={styles.btnBurger}>
                    <img src={menuBurger} alt="Icone Menu Burger" className={styles.btnBurger} />
                </button>

                {/* Lista de itens do menu */}
                <div className={styles.parte01}>
                    <a href="https://www.instagram.com/somente_ofelipe/" target="_blank">
                        <img src={iconInstagram} alt="Icone Intagram" />
                    </a>
                    <a href="https://github.com/Tiodevs" target="_blank">
                        <img src={iconGitHub} alt="Icone GitHub" />
                    </a>
                </div>

                <div className={styles.parte02}>
                    <NavLink to={`/`} className={({ isActive }) => isActive ? styles.active : ""}>
                        <img src={iconHome} alt="Icone para pagina home" />
                    </NavLink>
                    <NavLink to={`/documentos`} className={({ isActive }) => isActive ? styles.active : ""}>
                        <img src={iconDocuments} alt="Icone para pagina home" />
                    </NavLink>
                    <NavLink to={`/games`} className={({ isActive }) => isActive ? styles.active : ""}>
                        <img src={iconGames} alt="Icone para pagina home" />
                    </NavLink>
                </div>

                <div className={styles.parte03}>

                    <NavLink to={`/conquistas`} className={({ isActive }) => isActive ? styles.active : ""}>
                        <img src={iconConquista} alt="Icone para pagina home" />
                    </NavLink>
                    <img src={iconLogin} alt="Icone para pagina home" />

                </div>
            </nav>
        </>

    )
}