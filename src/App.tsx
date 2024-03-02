import React from 'react';

import ProfileSection from "../src/Sections/ProfileSection/Profile";
import "./App.css";
import "./mediaqueries.css";
import NavLinks from "./Nav/NavLinks";
import HamburgerNav from "./Nav/HamburgerNav";


function App() {
    return (
        <body>
            <nav id={"desktop-nav"} className={"bg-transparent flex justify-around items-center h-[17vh]  text-black "}>
                <div className={"font-semibold text-[2rem] bg-transparent hover:cursor-default logo"}>CHRIS LAM</div>
                <NavLinks/>
            </nav>
            <HamburgerNav/>

        <ProfileSection/>
        </body>

    );
}

export default App;
