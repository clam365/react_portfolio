import BeautifulMe from "../../assets/aboutpic.png";

import TextContainer from "./TextContainer";
import BasicAboutInfo from "./BasicAboutInfo";

export default function AboutDetailsContainer() {
    return (
        <div className="section-container flex">

            <div className="section__pic-container">
                <img src={BeautifulMe} alt="Profile"
                     className="about-pic rounded-full hover:scale-105 transition-all" style={{border: "0.1rem solid black"}}/>
            </div>
            <div className="about-details-container">
                <BasicAboutInfo/>
                <TextContainer/>
            </div>
        </div>
    );
}