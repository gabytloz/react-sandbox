import React from "react";
import { render } from "react-dom";
import { Route, Router, IndexRoute, browserHistory } from "react-router";

import App        from "./components/app";
import Home       from "./components/section/home";
import About      from "./components/section/about";
import Services   from "./components/section/services";
import Portfolio  from "./components/section/portfolio";
import Contact    from "./components/section/contact";

const router = <Router history={ browserHistory } >
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="about" component={About} />
    <Route path="services" component={Services} />
    <Route path="portfolio" component={Portfolio} />
    <Route path="contact" component={Contact} />
  </Route>
</Router>

render( router, document.getElementById("app") );
