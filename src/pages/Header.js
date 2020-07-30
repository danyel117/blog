import React from 'react';

import Logo from "assets/img/Logo-negro.png"
import '../assets/font/flaticon.css'
const Header = () => {
    return ( 
        <header>
            <section className="header-icons-container">
                <div className="icons">
                    <a href="/"><span className="flaticon-001-facebook"></span></a>
                    <a href="/"><span className="flaticon-002-twitter"></span></a>
                    <a href="/"><span className="flaticon-011-instagram"></span></a>
                    <a href="/"><span className="flaticon-010-linkedin"></span></a>
                    <a href="/"><span className="flaticon-008-youtube"></span></a>
                </div>
            </section>
            <nav>
                <section className="nav-logo-container">
                    <a href="/"><img src={Logo} alt="logo de mi blog"></img></a>
                </section>
                <section className="profile-link">
                    <a href="/">Sobre Mí</a>
                </section>
            </nav>
        </header>
     );
}
 
export default Header;