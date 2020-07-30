import React from 'react';
import {NavLink} from "react-router-dom"
import NewsIMG from "assets/img/main-news-img.png"
import Post1 from "assets/img/post-1.png"
import Post2 from "assets/img/post-2.png"
import Post3 from "assets/img/post-3.png"
import Post4 from "assets/img/post-1.png"
import Post5 from "assets/img/post-2.png"
import Post6 from "assets/img/post-3.png"

const Blog = () => {

    var imgArr=[Post1,Post2,Post3,Post4,Post5,Post6]

    return ( 
        <div>
            <main className="blogs-main">
                <section className="blogs-news-container">
                    <div className="grid-container blogs-main-new">
                        <h3>Título principal</h3>
                        <div className="blogs-news-img-container">
                            <img src={NewsIMG} alt=""/>
                        </div>
                        <div className="blogs-news-info-container">
                            <h2>Título del Post</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <NavLink to="/blog" className="blogs-button">Leer Más</NavLink>
                        </div>
                    </div>
                </section>
                <section className="blogs-post-container">
                    <div className="grid-container">
                        <h3>Últimos posts</h3>
                        {imgArr.map((el,key)=>{
                            return(
                                <article key={key} className="post-container">
                                    <img src={el} alt="Blog Post"></img>
                                    <p>Título del post</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <NavLink to="/blog" className="blogs-button">Leer Más</NavLink>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </main>
        </div>
     );
}
 
export default Blog;