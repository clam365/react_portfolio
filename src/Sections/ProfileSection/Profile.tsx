import ButtonContainer from "./ButtonContainer";
import SocialsContainer from "./SocialsContainer";
import "../../index.css"

import React from "react";
import SplineBackground from "../../Functions/SplineBackground";
export default function Profile() {
    return (
        <section id={"profile"} className={"flex justify-center gap-[5rem] h-[80vh] "}>
            <div className={"z-0"}><SplineBackground/></div>
            <div
                className={"grid mt-[6rem] justify-center items-center text-center absolute transition-all profileSection"}>
                <p className={"text-black font-semibold text-center m-[10px] text-[1.75rem] mb-[1rem]"}>Hello, I'm</p>
                <h1 className={"text-black font-bold  text-[3rem] text-center -m-[15px]"}>Christopher Lam</h1>
                <p className={"text-black font-semibold text-center m-[10px] text-[1.75rem] mt-[1.5rem]"}>Software
                    Engineer</p>

                <div className={"grid mt-2 justify-center m-auto"}>
                    <ButtonContainer/>
                    <SocialsContainer/>
                </div>

            </div>

        </section>
    );
}