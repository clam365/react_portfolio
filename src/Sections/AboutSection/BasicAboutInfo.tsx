import EducationIcon from "../../assets/education.png";
import ActivitiesIcon from "../../assets/experience.png";

export default function BasicAboutInfo() {
    return (
        <div className="about-containers">
            <div className="details-container drop-shadow-lg hover:scale-105 transition-all">
                <img src={EducationIcon} alt="Education icon" className="about-icon"/>
                <h3 className={"font-semibold"}>Education | GPA: 3.7</h3>
                <p className="about-p text-gray-400">B.S. in CS '26 WPI <br/>Dean's List (Fall '23 + '24) <br/>Charles Thompson Scholar</p>
            </div>
            <div className="details-container drop-shadow-lg hover:scale-105 transition-all">
                <img src={ActivitiesIcon} alt="Experience icon" className="about-icon"/>
                <h3 className={"font-semibold"}>Activities</h3>
                <p className="about-p text-gray-400">UEI Senior Video Editor <br/> SASE + SAE</p>
            </div>
        </div>
    );
}