import "../../globals.css"

const Projects = () => {

    return (
        <section className="projects" id="projects">
            <div className="middle-text">
                <h2>Mes derniers projets</h2>
            </div>
            <div className="projects-content">
                <div className="col">
                    <h3>Taquin</h3>
                    <h4>Java | JavaFX</h4>
                    <p>Le célèbre jeu du Taquin développé en Java et JavaFX pour l'interface !</p>
                    <a href="https://github.com/noahHem/Taquin" className="s-btnn" target="_blank">
                        Voir plus
                        <i className="ri-arrow-right-up-line"></i>
                    </a>
                </div>

                <div className="col">
                    <h3>Portfolio</h3>
                    <h4>NextJS</h4>
                    <p>Ce super portfolio développé en NextJS !</p>
                    <a href="https://github.com/noahHem/portfolio-nextJS" className="s-btnn" target="_blank">
                        Voir plus
                        <i className="ri-arrow-right-up-line"></i>
                    </a>
                </div>

                <div className="col">
                    <h3>Démineur</h3>
                    <h4>Java | JavaFX</h4>
                    <p>Le célèbre jeu du Démineur en Java et JavaFX pour l'interface !</p>
                    <a href="https://github.com/noahHem/Demineur" className="s-btnn" target="_blank">
                        Voir plus
                        <i className="ri-arrow-right-up-line"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects