import React from 'react';


const Landing = () => {
    return ( 
        <header>
            <section className="header-icons-container">
                <div className="icons">
                    <a href="/"><span></span></a>
                    <a href="/"><span></span></a>
                    <a href="/"><span></span></a>
                    <a href="/"><span></span></a>
                    <a href="/"><span></span></a>
                </div>
            </section>
            <nav>
                <section className="nav-logo-container">
                    <a href="/"><img src="" alt="logo de mi blog"></img></a>
                </section>
                <section className="profile-link">
                    <a href="/">Sobre Mí</a>
                </section>
            </nav>
        </header>
     );
}
 
export default Landing;