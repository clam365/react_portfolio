import "../mediaqueries.css";
//GO BACK TO THIS IF STYLING IS NOT RIGHT def with bg-black in menu??

export default function HamburgerNav() {

    function toggleMenu(): void {
        console.log("Toggle Menu Function Called");

        const menu: HTMLElement | null = document.getElementById("menu-links");
        const icon: HTMLElement | null = document.getElementById("hamburger-icon");

        console.log("Menu Element:", menu);
        console.log("Icon Element:", icon);

        if (menu && icon) {
            menu.classList.toggle("open");
            icon.classList.toggle("open");
        }
    }

    return (
        <nav id={"hamburger-nav"} className={"bg-transparent flex justify-around items-center h-[17vh]  text-black"}>

            <div className="font-semibold text-[2rem] bg-transparent hover:cursor-default logo">CHRIS LAM</div>

            <div className={"font-semibold text-[2rem] hover:cursor-default "}>
                <div className={"relative inline-block"}>
                    <div
                        className={"hamburger-icon mb-[100%]"}
                        onClick={toggleMenu}
                        id={"hamburger-icon"}
                    >
                        <span ></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div
                        id={"menu-links"}
                        className={"menu-links absolute top-[100%] right-0  w-fit max-h-0 overflow-hidden transition-all"}>
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