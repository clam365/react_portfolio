import EducationIcon from "../../assets/education.png";
import ActivitiesIcon from "../../assets/experience.png";

export default function BasicAboutInfo() {
    return (
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
    );
}