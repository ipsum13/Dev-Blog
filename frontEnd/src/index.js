import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BlogList from "./components/blogList/blogList";
import Contact from "./components/contact/contact";
import BlogByTag from './components/blogByTag/blogByTag';
import BlogByTitle  from './components/blogByTitle/blogByTitle';
import About from './components/about/about';

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/blog" component={BlogList} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/blog/tags/:id" component={BlogByTag} />
      <Route exact path="/blog/:id" component={BlogByTitle} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
