import EmailIcon from "../../assets/email.png";
import LinkedInIcon from "../../assets/linkedin2.png";
import "./contact.css";
export default function ContactSection() {
    return(
        <section id={"contact"} className={"-mb-5"}>
            <p className="section__text__p1 ">Let's Get in Touch</p>
            <h1 className="title font-semibold">CONTACT ME</h1>

            <div className="contact-info-upper-container drop-shadow-lg hover:scale-105 transition-all">
                <div className="contact-info-container">
                    <img src={EmailIcon} alt="email icon" className="icon contact-icon email-icon"/>
                    <p className="contact-text"><a href="mailto:christpherlam365@gmail.com"
                                                   className="hello">christpherlam365@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img src={LinkedInIcon} alt="LinkedIn icon" className="icon contact-icon email-icon"/>
                    <p className="contact-text"><a href="https://www.linkedin.com/in/chrislam365"
                                                   className="hello">LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
}