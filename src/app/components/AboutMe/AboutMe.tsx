import "../../globals.css"

const AboutMe = () => {

    return (
        <section className="about" id="about">
            <div className="about-img">
                <a href="https://github.com/noahHem" id="githublien" target="_blank"><img src="/git-icon-logo-svg-vector.svg" alt="github" /></a>
            </div>
            <div className="about-text">
                <h2>À propos de moi</h2>
                <h4><span>Développeur Web</span></h4>
                <p>Avant d'arriver à l'université, j'étais au lycée en filière scientifique avec les spécialités
                    mathématiques et NSI (Numérique et sciences informatiques). C'est à cette période que j'ai découvert
                    le développement. J'ai tout de suite apporté de l'intérêt à l'informatique donc quand il a fallu faire un
                    choix après le lycée, c'est naturellement que je me suis dirigé vers un BUT informatique. Au cours de mes années
                    années de BUT j'ai pu réaliser de nombreux projets de groupe qui m'ont permis
                    de développer mes compétences. J'ai également rejoint le cursus d'alternant avant le début de ma troisième année,
                    cela m'a permis de me confronter au monde de l'entreprise et d'acquérir de nouvelles compétences plus rapidement.
                    La plupart de mes projets sont disponibles sur mon <a href="https://github.com/noahHem" id="github" target="_blank"><b>Github</b></a>.
                </p>
            </div>
        </section>
    )
}
export default AboutMe