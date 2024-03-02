import GithubIcon from "../../assets/github.png";
import LinkedInIcon from "../../assets/linkedin.png";
export default function SocialsContainer() {
    function handleLinkedIn() {
        window.open("https://linkedin.com/in/chrislam365");
    }

    function handleGitHub() {
        window.open("https://github.com/clam365");
    }

    return(
        <div className={"flex justify-center mt-[1rem] gap-[1rem]"}>
            <img src={LinkedInIcon} alt={"LinkedIn"} className={"bg-transparent cursor-pointer h-[2rem]"}
                 onClick={handleLinkedIn}/>
            <img src={GithubIcon} alt={"Github"} className={"bg-transparent cursor-pointer h-[2rem]"}
                 onClick={handleGitHub}/>

        </div>
    );
}