import "./skills.css";
import JavaCL from "./CodingLanguagesComponents/JavaCL";
import JavaScriptCL from "./CodingLanguagesComponents/JavaScriptCL";
import TypescriptCL from "./CodingLanguagesComponents/TypescriptCL";
import PythonCL from "./CodingLanguagesComponents/PythonCL";
import CCL from "./CodingLanguagesComponents/C-CL";
import CPlusPlusCL from "./CodingLanguagesComponents/CPlusPlusCL";
import ReactJSCL from "./CodingLanguagesComponents/ReactJSCL";
import HTMLCL from "./CodingLanguagesComponents/HTMLCL";
import AxiosCL from "./CodingLanguagesComponents/AxiosCL";
import ExpressCL from "./CodingLanguagesComponents/ExpressCL";
import NodeJSCL from "./CodingLanguagesComponents/NodeJSCL";
import RacketCL from "./CodingLanguagesComponents/RacketCL";
import TailwindCL from "./CodingLanguagesComponents/TailwindCL";
import CourseList from "./CourseList";
import {Fade} from "react-awesome-reveal";
export default function SkillsSection() {
    return(
        <Fade>
            <section id={"skills"}>
                <p className="section__text__p1">Explore My</p>
                <h1 className="title font-bold">TECHNICAL SKILLS</h1>
                <div className="skill-details-container">
                    <div className="about-containers">
                        <div className="details-containers drop-shadow-lg">
                            <h2 className="skill-sub-title font-semibold text-2xl">CODING LANGUAGES</h2>
                            <div className={" mt-4 flex flex-wrap justify-center"}>
                                <JavaCL/>
                                <PythonCL/>
                                <JavaScriptCL/>
                                <TypescriptCL/>
                                <CCL/>
                                <CPlusPlusCL/>
                                <ReactJSCL/>
                                <TailwindCL/>
                                <HTMLCL/>
                                <AxiosCL/>
                                <ExpressCL/>
                                <NodeJSCL/>
                                <RacketCL/>
                            </div>
                        </div>
                        <CourseList/>
                    </div>
                </div>
            </section>
        </Fade>

    );
}