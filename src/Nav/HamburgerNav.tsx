import { toggleMenu } from '../Functions/ToggleMenu';

//GO BACK TO THIS IF STYLING IS NOT RIGHT def with bg-black in menu??
export default function HamburgerNav() {
    return (
        <nav id={"hamburger-nav"}>
            <div className={"font-semibold text-[2rem] hover:cursor-default"}>
                <div className={"relative inline-block"}>

                    <div className={"flex flex-col justify-between h-[24px] w-[30px] cursor-pointer hamburger-icon"} onClick={toggleMenu}>
                        <span className={"w-[100%] h-[2px] transition-all"}></span>
                        <span className={"w-[100%] h-[2px] transition-all"}></span>
                        <span className={"w-[100%] h-[2px] transition-all"}></span>
                    </div>

                    <div className={"menu-links absolute top-[100%] right-0 bg-black w-fit max-h-0 overflow-hidden transition-all"}>
                        <li className={"list-none"}>
                            <a href={"#about"} onClick={toggleMenu}
                               className={"block p-[10px] text-center text-[1.5rem] text-black no-underline transition-all"}>About</a>
                        </li>
                        <li className={"list-none"}>
                            <a href={"#skills"} onClick={toggleMenu}
                               className={"block p-[10px] text-center text-[1.5rem] text-black no-underline transition-all"}>Skills</a>
                        </li>
                        <li className={"list-none"}>
                            <a href={"#projects"} onClick={toggleMenu}
                               className={"block p-[10px] text-center text-[1.5rem] text-black no-underline transition-all"}>Projects</a>
                        </li>
                        <li className={"list-none"}>
                            <a href={"#contact"} onClick={toggleMenu}
                               className={"block p-[10px] text-center text-[1.5rem] text-black no-underline transition-all"}>Contact</a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
}