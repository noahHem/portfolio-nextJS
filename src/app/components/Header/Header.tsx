"use client";
import "../../globals.css"
import {useEffect, useState} from "react";
import 'boxicons/css/boxicons.min.css';

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    const [isSticky, setIsSticky] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Inverser l'état de menuOpen
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mettez à jour la condition de taille si besoin
        };

        // Appel initial pour définir l'état en fonction de la taille actuelle
        handleResize();

        // Ajouter un listener pour mettre à jour isMobile en cas de redimensionnement
        window.addEventListener("resize", handleResize);

        // Nettoyage du listener au démontage du composant
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMenuItemClick = () => {
        setMenuOpen(false); // Fermer le modal lorsque l'on clique sur un élément du menu
    };

    return (
        <header className={isSticky ? "sticky" : ""}>
            <a href="#home" className="logo">
                Bienvenue !
            </a>

            {isMobile && <div>
                <i className="bx bx-menu" id="menu-icon" onClick={toggleMenu} />
            </div>}

            <ul className={`nav ${menuOpen ? "open" : ""}`}>
                <li onClick={handleMenuItemClick}><i className="bx bx-x" id="menu-icon" /></li>
                <li><a href="#home" onClick={handleMenuItemClick}>Accueil</a></li>
                <li><a href="#about" onClick={handleMenuItemClick}>À propos</a></li>
                <li><a href="#skill" onClick={handleMenuItemClick}>Compétences</a></li>
                <li><a href="#projects" onClick={handleMenuItemClick}>Projets</a></li>
            </ul>
        </header>
    )
}

export default Header