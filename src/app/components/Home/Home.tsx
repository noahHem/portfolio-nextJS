import "../../globals.css"
const HomeComponent = () => {

    return (
        <section className="home" id="home">
            <div className="home-text">
                <h1>Je suis <span>Noah Hemery</span>,</h1>
                <h2>étudiant en informatique.</h2>

                <ul className="count">
                    <li>Actuellement en 3ème année de BUT.</li>
                    <div className="contact-icons">
                        <a href="https://www.linkedin.com/in/noah-hemery/" target="_blank"><i
                            className='bx bxl-linkedin'></i></a>
                    </div>
                </ul>
                <a href="/HEMERY_Noah_CV.pdf" className="btn" download="HEMERY_NOAH_CV">
                    Télécharger mon CV
                    <i className="ri-arrow-right-up-line"></i>
                </a>
            </div>
            <div className="home-img">
                <img src="/photoPortfolio.png" alt="photo" />
            </div>
        </section>
    )
}

export default HomeComponent