"use client";
import "../../globals.css"
import {useEffect, useState} from "react";

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    const [isSticky, setIsSticky] = useState(false);

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

    return (
        <header className={isSticky ? "sticky" : ""}>
            <a href="#home" className="logo">
                Bienvenue !
            </a>
            <ul className="nav">
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#skill">Compétences</a></li>
                <li><a href="#projects">Projets</a></li>
            </ul>

            {isMobile && <div className="right-nav">
                <div className="bx bx-menu" id="menu-icon"></div>
            </div>}
        </header>
    )
}

export default Header