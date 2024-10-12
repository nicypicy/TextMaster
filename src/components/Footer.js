import React from "react";
import "./Footer.css";

export default function Footer(){
    return(
       <footer className="footer" id="footer">
        <div className="footer-content">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/varshapenukonda/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/nicypicy" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/varshaherself/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="contact-info">
                    <p>Varsha Penukonda</p>
                    <p>varshapenukonda@gmail.com</p>
                </div>
            </div>
       </footer>
    )
}