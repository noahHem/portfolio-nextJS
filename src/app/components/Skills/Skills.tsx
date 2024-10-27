import "../../globals.css"
const Skills = () => {

    return (
        <section className="skill" id="skill">
            <div className="header skill-head">
                <h2>Mes <span>compétences</span></h2>
                <p>Voici les compétences principales que j'ai acquises au cours de mon parcours.</p>
            </div>
            <div className="skill-main">
                <div className="skill-bar">
                    <div className="info">
                        <p>Python</p>
                        <p className="percent">80%</p>
                    </div>
                    <div className="bar">
                        <span className="python"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>Java</p>
                        <p className="percent">75%</p>
                    </div>
                    <div className="bar">
                        <span className="java"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>PHP</p>
                        <p className="percent">75%</p>
                    </div>
                    <div className="bar">
                        <span className="php"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>Symfony</p>
                        <p className="percent">85%</p>
                    </div>
                    <div className="bar">
                        <span className="laravel"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>React | React Native</p>
                        <p className="percent">85%</p>
                    </div>
                    <div className="bar">
                        <span className="html"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>PostgreSQL | SQL</p>
                        <p className="percent">80%</p>
                    </div>
                    <div className="bar">
                        <span className="sql"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>Git</p>
                        <p className="percent">90%</p>
                    </div>
                    <div className="bar">
                        <span className="git"></span>
                    </div>
                </div>

                <div className="skill-bar">
                    <div className="info">
                        <p>Bash</p>
                        <p className="percent">70%</p>
                    </div>
                    <div className="bar">
                        <span className="bash"></span>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/travail-en-equipe.png" alt="equipe" className="skill-icon" />
                                <h3>Travail d'équipe</h3>
                        </div>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/gestion-de-projet.png" alt="organisation" className="skill-icon" />
                                <h3>Organisation</h3>
                        </div>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/sablier.png" alt="sablier" className="skill-icon" />
                                <h3>Gestion du temps</h3>
                        </div>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/travail-autonome.png" alt="autonomie" className="skill-icon" />
                                <h3>Autonomie</h3>
                        </div>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/eng.png" alt="anglais" className="skill-icon" />
                                <h3>Anglais</h3>
                        </div>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src="/but.png" alt="persévérance" className="skill-icon" />
                                <h3>Persévérance</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills