import React from "react";
import { render } from "react-dom";
import { Route, Router, IndexRoute, browserHistory, applyRouterMiddleware } from "react-router";
import { useScroll } from 'react-router-scroll';

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/application.scss";

import App        from "./components/app";
import Home       from "./components/section/home";
import About      from "./components/section/about";
import Services   from "./components/section/services";
import Portfolio  from "./components/section/portfolio";
import Contact    from "./components/section/contact";

import shouldUpdateScroll from "./lib/smooth-scrolling";

const router = <Router history={ browserHistory } render={ applyRouterMiddleware( useScroll( shouldUpdateScroll ) ) } >
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="about" component={Home} />
    <Route path="services" component={Home} />
    <Route path="portfolio" component={Home} />
    <Route path="contact" component={Home} />
  </Route>
</Router>

render( router, document.getElementById("app") );
