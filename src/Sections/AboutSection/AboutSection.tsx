import ArrowIcon from "../../assets/arrow.png";
import '../../index.css';
import '../../mediaqueries.css';
import "../AboutSection/about.css";
import AboutDetailsContainer from "./AboutDetailsContainer";

export default function AboutSection() {
    function handleArrowToSkillsClick() {
        window.location.href = '#skills';
    }

    return (
        <section id="about" className={'z-50 relative '}>
            <p className={'section__text__p1'}>Get To Know More</p>
            <h1 className={'text-black font-bold text-[3rem] text-center -m-[15px]  aboutMeText'}>ABOUT ME</h1>
            <AboutDetailsContainer/>
                <br/>
                <br/>
                <br/>

            <img src={ArrowIcon} alt={"Arrow"}
                 className={" right-[-7.5rem] bottom-[-0.5rem] h-[2rem] cursor-pointer arrow"}
                 onClick={handleArrowToSkillsClick}/>
        </section>
    );
}
