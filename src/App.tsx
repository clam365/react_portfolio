import React from 'react';
import SplineBlob from "../src/assets/blobs2.png";
import ProfileSection from "../src/Sections/ProfileSection/Profile";
import "./App.css";
import "./mediaqueries.css";
import NavLinks from "./Nav/NavLinks";
import HamburgerNav from "./Nav/HamburgerNav";

function App() {
    //todo the overflowhidden might be a problem for sections but thats for later
    return (
        <body className={"relative overflow-x-hidden"}>

            <div id="splineBlob" style={{
                position: 'absolute',
                top: 175,
                left: 200,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }} >
                <img src={SplineBlob} alt={""} className={"scale-90"}/>
            </div>

            <div className={"z-10"}>
                <nav id={"desktop-nav"}
                     className={"bg-transparent flex justify-around items-center h-[17vh] text-black z-10"}>
                    <div className={"text-[#635D5C] font-semibold text-[2rem] bg-transparent hover:cursor-default logo profileSection"}>CHRIS LAM
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
