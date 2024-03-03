import BeautifulMe from "../../assets/aboutpic.png";
import EducationIcon from "../../assets/education.png";
import ActivitiesIcon from "../../assets/experience.png";
import ArrowIcon from "../../assets/arrow.png";
import '../../index.css';
import '../../mediaqueries.css';
import "../AboutSection/about.css";

export default function AboutSection() {
    function handleArrowToSkillsClick() {
        window.location.href = '#skills';
    }

    return (
        <section id="about" className={'z-50 relative '}>
            <p className={'section__text__p1'}>Get To Know More</p>
            <h1 className={'text-black font-bold text-[3rem] text-center -m-[15px]  aboutMeText'}>ABOUT ME</h1>

            <div className="section-container flex">

                <div className="section__pic-container">
                    <img src={BeautifulMe} alt="Profile"
                         className="about-pic rounded-full "/>
                </div>

                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container border-black border-2 hover:scale-105 transition-all">
                            <img src={EducationIcon} alt="Education icon" className="about-icon"/>
                            <h3>Education | GPA: 3.7</h3>
                            <p className="about-p">B.S. Computer Science '26</p>
                        </div>
                        <div className="details-container border-black border-2 hover:scale-105 transition-all">
                            <img src={ActivitiesIcon} alt="Experience icon" className="about-icon"/>
                            <h3>Activities</h3>
                            <p className="about-p">UEI Senior Video Editor <br/> SASE + SAE</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            Hi, my name is Chris Lam! I have an extreme passion for web development using all sorts of
                            libraries
                            along interests in building personal projects in Python regarding artificial intelligence
                            and
                            digital imaging.
                            Thriving on facing challenges head on, it builds my adaptability and resilience in the
                            process.
                            <br/>
                            I firmly believe in developing technology for the betterment of the world, whether it's a
                            global
                            or my local community.
                            With my leadership, attitude, and coding skills towards project-based learning, I strive to
                            collaborate with
                            diverse individuals and teams to create positive change.
                        </p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>

            <img src={ArrowIcon} alt={"Arrow"}
                 className={" right-[-7.5rem] bottom-[-0.5rem] h-[2rem] cursor-pointer arrow"}
                 onClick={handleArrowToSkillsClick}/>
        </section>
    );
}
