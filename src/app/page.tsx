import Header from "@/app/components/Header/Header";
import HomeComponent from "@/app/components/Home/Home";
import AboutMe from "@/app/components/AboutMe/AboutMe";
import Skills from "@/app/components/Skills/Skills";
import Projects from "@/app/components/Projects/Projects";
import Footer from "@/app/components/Footer/Footer";
import "./globals.css"
export default function Home() {

    return (
        <>
            <Header/>
            <HomeComponent/>
            <AboutMe/>
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}
