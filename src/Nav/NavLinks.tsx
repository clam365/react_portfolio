export default function NavLinks() {
    return (
        <div className={"flex bg-transparent profileSection"}>
            <ul className={"flex gap-[2rem] list-none text-[1.5rem] nav-links bg-transparent nav-links"}>
                <li className={"bg-transparent text-black"}>
                    <a href={"#about"}>ABOUT</a>
                </li>
                <li className={"bg-transparent text-black"}>
                    <a href={"#skills"}>SKILLS</a>
                </li>
                <li className={"bg-transparent text-black"}>
                    <a href={"#projects"}>PROJECTS</a>
                </li>
                <li className={"bg-transparent text-black"}>
                    <a href={"#contact"} >CONTACT</a>
                </li>
            </ul>
        </div>
    );
}
