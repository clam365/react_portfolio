import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
export default function ProjectSection() {
    return(
        <section id={"projects"}>
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title font-bold">PROJECTS</h1>

            <div className={"mt-16"}>
                <ProjectOne/>
                <ProjectTwo/>
                <ProjectThree/>
            </div>


        </section>
    );
}