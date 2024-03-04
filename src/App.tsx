import "./App.css";
import "./mediaqueries.css";
import NavLinks from "./Nav/NavLinks";
import HamburgerNav from "./Nav/HamburgerNav";
import ProfileSection from "../src/Sections/ProfileSection/Profile";
import AboutSection from "./Sections/AboutSection/AboutSection";
import SkillsSection from "./Sections/SkillsSection/SkillsSection";
import ProjectSection from "./Sections/ProjectsSection/ProjectSection";
import ContactSection from "./Sections/ContactSection/ContactSection";
import WebsiteFooter from "./Sections/FooterEnding/WebsiteFooter";

function App() {


    return (
        <body className={"relative overflow-x-hidden"}>
            <nav id={"desktop-nav"} className={"bg-transparent flex justify-around items-center h-[17vh] text-black"}>
                <div
                    className={"text-black font-semibold text-[2rem] bg-transparent hover:cursor-default logo profileSection"}>
                    CHRIS LAM
                </div>
                <NavLinks/>
            </nav>
            <HamburgerNav/>
            <ProfileSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
            <WebsiteFooter/>
        </body>

    );
}

export default App;
