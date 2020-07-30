import React from 'react';
import {NavLink} from "react-router-dom";

const Landing = () => {
    return ( 
        <main className="home-body home-main">
            <section>
                <h1 className="home-main-text">Conoce las novedades y noticias del mundo tech</h1>
                <button className="home-main-button">
                    <NavLink to="/blogs" activeClassName="selected">
                        ¡Vamos!
                    </NavLink>
                </button>
            </section>
        </main>
     );
}
 
export default Landing