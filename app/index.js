import React from "react";
import { render } from "react-dom";
import { Route, Router, IndexRoute, browserHistory } from "react-router";

import App      from "./components/app";
import Home     from "./components/home";
import About    from "./components/about";
import Contact  from "./components/contact";

const router = <Router history={ browserHistory } >
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
  </Route>
</Router>

render( router, document.getElementById("app") );
