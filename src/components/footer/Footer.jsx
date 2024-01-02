import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footerstyle.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                THEATRE is a cutting-edge platform that brings the world of movies and series right to your fingertips. Powered by the free API from The Movie Database (TMDb), we offer a comprehensive showcase of movies and series, complete with all the details you need to make informed viewing decisions.
                </div>
                <div className="socialIcons">
                    <a href="https://www.instagram.com/dev_daizy" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com/dev_daizy" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/dev_daizy" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.github.com/dev-daizy" target="_blank" rel="noopener noreferrer" className="icon">
                      <FaGithub />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
