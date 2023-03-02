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


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/:fileName" element={<Post fileName={fileName} />} />
        {/*<Route path="/product/:id" element={<Product />} />*/}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
