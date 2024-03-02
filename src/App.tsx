import ProfileSection from "../src/Sections/ProfileSection/Profile";
import "./App.css";
import "./mediaqueries.css";
import NavLinks from "./Nav/NavLinks";
import HamburgerNav from "./Nav/HamburgerNav";
import SplineBackground from "./Functions/SplineBackground";

function App() {


    return (
        <body className={"relative overflow-x-hidden"}>
        <SplineBackground/>
        <div className={"z-10"}>
            <nav id={"desktop-nav"} className={"bg-transparent flex justify-around items-center h-[17vh] text-black z-10"}>
                <div className={"text-black font-semibold text-[2rem] bg-transparent hover:cursor-default logo profileSection"}>
                    CHRIS LAM
                </div>
                <NavLinks />
            </nav>
            <HamburgerNav />
            <ProfileSection />
        </div>
        </body>
    );
}

export default App;
