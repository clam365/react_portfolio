import React from 'react';
import Spline from '@splinetool/react-spline';
import ProfileSection from "../src/Sections/ProfileSection/Profile";
import "./App.css";
import "./mediaqueries.css";
import NavLinks from "./Nav/NavLinks";
import HamburgerNav from "./Nav/HamburgerNav";

function App() {
    return (
        <body className={"relative overflow-x-hidden"}>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }} className={"scale-[50%] "}>
                <Spline scene="https://prod.spline.design/kr3ccE52vUxCE3Bl/scene.splinecode"/>
            </div>

            <div className={"z-10"}>
                <nav id={"desktop-nav"}
                     className={"bg-transparent flex justify-around items-center h-[17vh] text-black z-10"}>
                    <div className={"font-semibold text-[2rem] bg-transparent hover:cursor-default logo"}>CHRIS LAM
                    </div>
                    <NavLinks/>
                </nav>

                <HamburgerNav/>
                <ProfileSection/>
            </div>


        </body>
    );
}

export default App;
