import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components Navbar
import Navigation from "./Header";

//components LandingPage
import App from "./App";
import Archive from "./posts/Posts";
import Post from "./posts/Post";
import Projects from "./projects/Projects";
import Subscription from './subscription/Subscription';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/:id" render={(props) => <Post globalStore={this.props.globalStore} {...props} /> } />
        <Route path="/archive" element={<Archive />} />
        <Route path="/:fileName" element={<Post />} />
        <Route path="/projects" element={<Projects />} />
<Route path="/subscription" element={<Subscription />} />
        {/*<Route path="/product/:id" element={<Product />} />*/}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
