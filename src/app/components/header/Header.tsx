import "./headerStyles.css"

const Header = () => {

    return (
        <header>
            <a href="#home" className="logo">
                Bienvenue !
            </a>
            <ul className="nav">
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#skill">Compétences</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Me contacter</a></li>
            </ul>
        </header>
    )
}

export default Header