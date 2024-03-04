
import '../../index.css';
import '../../mediaqueries.css';
import "../AboutSection/about.css";
import AboutDetailsContainer from "./AboutDetailsContainer";

export default function AboutSection() {

    return (
        <section id="about" className={'z-50 relative '}>
            <p className={'section__text__p1  '}>Get To Know More</p>
            <h1 className={'  font-bold text-[3rem] text-center -m-[15px]  aboutMeText'}>ABOUT ME</h1>
            <AboutDetailsContainer/>
                <br/>
                <br/>
                <br/>


        </section>
    );
}
