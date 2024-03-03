import BeautifulMe from "../../assets/aboutpic.png";
import EducationIcon from "../../assets/education.png";
import ActivitiesIcon from "../../assets/experience.png";
import ArrowIcon from "../../assets/arrow.png";
import '../../index.css';
import '../../mediaqueries.css';

export default function AboutSection() {
    function handleArrowToSkillsClick() {
        window.location.href = '#skills';
    }

    return (
        <section id="about" className={'z-50 relative flex-wrap'}>
            <p className={'text-black font-semibold text-center m-[10px] text-[1.75rem] mb-[1rem]'}>Get To Know More</p>
            <h1 className={'text-black font-bold text-[3rem] text-center -m-[15px]'}>ABOUT ME</h1>

            <div className={"gap-[4rem] h-[80%] flex justify-center items-center m-auto section-container"}>
                <div className={"m-auto section__pic-container"}>
                    <img src={BeautifulMe} alt={"about-chris"} className={"rounded-full scale-110 border-black border-2"}/>
                </div>

                <div className={"justify-center flex-col "}>
                    <div className={"flex justify-center about-containers"}>
                        <div className={" mb-[2rem] mt-[2rem]"}>
                            <div className={"flex gap-[4rem]"}>
                                <div
                                    className={"p-[1.5rem] flex-1 bg-white rounded-[2rem] border-black border-2 text-center hover:scale-105 transition-all"}>
                                    <img src={EducationIcon} alt={"Education"} className={"h-[2rem]"}/>
                                    <h3 className={"font-semibold"}>Education | GPA: 3.7</h3>
                                    <p>B.S. Computer Science '26</p>
                                </div>
                                <div
                                    className={"p-[1.5rem] flex-1 bg-white rounded-[2rem] border-black border-2 text-center hover:scale-105 transition-all"}>
                                    <img src={ActivitiesIcon} alt={"activities"} className={"h-[2rem]"}/>
                                    <h3 className={"font-semibold"}>Activities</h3>
                                    <p className={""}>UEI Senior Video Editor <br/> SASE + SAE</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"text-container"}>
                        <p className={"ml-20 mr-20"}>
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

            <img src={ArrowIcon} alt={"Arrow"}
                 className={"absolute right-[-5rem] bottom-[2.5rem] h-[2rem] cursor-pointer arrow"}
                 onClick={handleArrowToSkillsClick}/>
        </section>
    );
}
