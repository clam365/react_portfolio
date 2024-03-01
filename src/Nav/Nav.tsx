import NavLinks from "./NavLinks";
import HamburgerNav from "./HamburgerNav";

export default function Nav() {
    return(
        <div>
            <nav id={"desktop-nav"} className={"bg-transparent flex justify-around items-center h-[17vh]  text-black "}>
                <div className={"font-semibold text-[2rem] bg-transparent hover:cursor-default logo"}>CHRIS LAM</div>
                <NavLinks/>
            </nav>
            <HamburgerNav/>
        </div>

    )
}