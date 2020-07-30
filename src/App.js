import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from 'components/Header'
import Landing from "pages/Landing"
import Blogs from "pages/Blogs"

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact path="/" component={Landing}/>
        <Route path="/blogs" component={Blogs}/>
      </Router>
    </div>
  );
}

export default App;
