import React from 'react';

import Like from "assets/img/006-like.png"
import Escribe from "assets/img/013-newsletter.png"

const Contacto = () => {
    return ( 
    <section className="contact-main-container">
        <div>
            <img src={Like} alt=""></img>
            <div className="contact-left">
                <a href="/">Contacto</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
        <div>
            <img src={Escribe} alt=""></img>
            <div className="contact-right">
                <a href="/">Escribe</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
    </section>
     );
}
 
export default Contacto;