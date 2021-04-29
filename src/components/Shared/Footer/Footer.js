import React from 'react';
import logo from "../../../images/losdsadgo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="p-5  FooterBg">
            <img className="centerImage" src={logo} height="200px" alt="" />
            <div className="container">
                <div class="input-group subscribe mb-3 w-50">
                    <input type="text" class="form-control" placeholder="Enter Email to Subscribe" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="input-group-text btn btn-primary" id="basic-addon2">Subscribe</button>
                    </div>

                </div>
                <div className="SocialIcon">
                    <ul>
                        <li><Nav.Link target="__blank" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></Nav.Link></li>
                        <li><Nav.Link target="__blank" href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></Nav.Link></li>
                        <li><Nav.Link target="__blank" href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></Nav.Link></li>

                    </ul>
                </div>
            </div>
            <div className=" text-center">
                <small>© sazzadonik.com</small>
            </div>
        </div>
    );
};

export default Footer;