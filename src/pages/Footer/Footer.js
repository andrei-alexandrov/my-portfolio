// import React from "react";
// import styled from "styled-components";

// const Footer = styled.footer`
//   background-color: #fff;
//   padding: 20px 0;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 10px 0;
//   }
// `;

// const Copyright = styled.p`
//   font-size: 12px;
//   color: #999;
// `;

// const FooterLinks = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;

//   li {
//     display: inline-block;
//     margin-right: 10px;
//   }

//   a {
//     color: #333;
//     text-decoration: none;

//     &:hover {
//       color: #000;
//     }
//   }
// `;

// const FooterText = () => (
//   <Footer>
//     <Copyright>Copyright © 2023 Your Company</Copyright>
//     <FooterLinks>
//       <li><a href="#">About Us</a></li>
//       <li><a href="#">Contact Us</a></li>
//       <li><a href="#">Privacy Policy</a></li>
//       <li><a href="#">Terms of Service</a></li>
//     </FooterLinks>
//   </Footer>
// );

// export default FooterText;

import React from 'react';

import Github from "@iconscout/react-unicons/icons/uil-github"
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"

import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <span>Created by Andrei Alexandrov 2023 ©</span>
                    <p>andrei.alxv@gmail.com</p>
                    <div className='footer-icons'>
                        <a href='https://www.github.com/andrei-alexandrov' target='_blank' rel="noreferrer">
                            <span className="screen-reader">GitHub</span>
                            <Github color='white' size='2.7rem' />
                        </a>
                        <a href='https://www.linkedin.com/in/andrei-alexandrov/' target='_blank' rel="noreferrer">
                            <span className="screen-reader">LinkedIn</span>
                            <LinkedIn color='white' size='2.6rem' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
