import React from 'react';
import Contacto from "components/Contacto"
import ProfilePic from "assets/img/profile-pic.jpg"
const Perfil = () => {
    return ( 
        <div>
            <section className="profile-main-container">
                <div className="grid-container profile-container">
                    <div>
                        <img src={ProfilePic} alt="ProfilePicture"/>
                    </div>
                    <div>
                        <h2>¡Hola, mi nombre es Daniel Saldarriaga!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </section>
            <section className="profile-main-projects">
                <div className="grid-container">
                    <h3>Proyectos</h3>
                    <div className="projects-main-container">
                        <article className="project-container">
                            <h4>Título</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </article>
                        <article className="project-container">
                            <h4>Título</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </article>
                        <article className="project-container">
                            <h4>Título</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </article>
                    </div>
                </div>
            </section>
            <Contacto/>
        </div>
     );
}
 
export default Perfil;