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
            <img src={LinkedInIcon} title={"LinkedIn"} alt={"LinkedIn"} className={"drop-shadow-lg  bg-transparent cursor-pointer h-[2rem] hover:invert transition-all"}
                 onClick={handleLinkedIn}/>
            <img src={GithubIcon} alt={"Github"} title={"Github"} className={"bg-transparent cursor-pointer h-[2rem] drop-shadow-lg hover:invert transition-all"}
                 onClick={handleGitHub}/>

        </div>
    );
}