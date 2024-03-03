import ButtonContainer from "./ButtonContainer";
import SocialsContainer from "./SocialsContainer";
import "../../index.css";
import React from "react";
import SplineBackground from "../../Functions/SplineBackground";

export default function Profile() {
    return (
        <section id="profile" className="flex justify-center h-[80vh]">
            <div className="z-0">
                <SplineBackground />
            </div>
            <div className="grid mt-[6rem] mr-5 relative transition-all profileSection">
                <div className={"profileText"}>
                    <p className="text-black font-semibold text-center text-[1.75rem]">
                        Hello, I'm
                    </p>
                    <h1 className="text-black font-bold text-[3rem] text-center">
                        Christopher Lam
                    </h1>
                    <p className="text-black font-semibold text-center text-[1.75rem]">
                        Software Engineer
                    </p>

                    <div className="grid mt-2 justify-center m-auto">
                        <ButtonContainer/>
                        <SocialsContainer/>
                    </div>
                </div>

            </div>
        </section>
    );
}
