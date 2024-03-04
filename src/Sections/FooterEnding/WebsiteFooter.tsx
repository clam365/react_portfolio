import "./footer.css";
import {Fade} from "react-awesome-reveal";
export default function WebsiteFooter() {
    return (
        <Fade>
            <footer className="reveal">
                <nav>
                    <div className="nav-links-container">
                        <ul className="nav-links bottom-nav">
                            <li><a href={"#about"}>ABOUT</a></li>
                            <li><a href={"#skills"}>SKILLS</a></li>
                            <li><a href={"#projects"}>PROJECTS</a></li>
                            <li><a href={"#contact"}>CONTACT</a></li>
                        </ul>
                    </div>
                </nav>
                <p className="ending">Copyright © 2024 Christopher Lam. All Rights Reserved.</p>
            </footer>
        </Fade>

    );
}