import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

//App component
import App from "./App";
import Posts from "./posts/Posts";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" component={App} />
    </Routes>
  );
};

export default Routing;
