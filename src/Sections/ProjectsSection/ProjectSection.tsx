import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import {Fade} from "react-awesome-reveal";

export default function ProjectSection() {

    return(
        <Fade>
            <section id={"projects"} className={""}>
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="title font-bold">PROJECTS</h1>

                <div className={"mt-16"}>
                    <ProjectOne/>
                    <ProjectTwo/>
                    <ProjectThree/>
                </div>

            </section>
        </Fade>

    );
}