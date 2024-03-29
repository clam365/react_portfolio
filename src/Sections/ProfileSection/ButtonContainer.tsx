import React from "react";
import "./buttonContainer.css";

export default function ButtonContainer() {
    function handleDownloadCV() {
        // Use window.open to open the PDF in a new tab
        window.open("/christopher-lam-resume.pdf", "_blank");
    }

    function handleContactClick() {
        window.location.href = '#contact';
    }

    return (
        <div className={"btn-container"}>
            <button className={"btn btn-color-2 drop-shadow-lg"} onClick={handleDownloadCV} >
                Download CV
            </button>
            <button className={"btn btn-color-1  drop-shadow-lg"} onClick={handleContactClick}>
                Contact Me
            </button>
        </div>
    );
};

