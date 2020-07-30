import React from 'react';
import './App.css';
import "assets/css/media-queries.css"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from 'components/Header'
import Footer from "components/Footer"
import Landing from "pages/Landing"
import Blogs from "pages/Blogs"
import Blog from "pages/Blog"
import Perfil from "pages/Perfil"

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route exact path="/" component={Landing}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/perfil" component={Perfil}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
