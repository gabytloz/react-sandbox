import React from "react";
import Navigation from "./modules/navigation";

import Home       from "./section/home";
import About      from "./section/about";
import Services   from "./section/services";
import Portfolio  from "./section/portfolio";
import Contact    from "./section/contact";

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  cleanProps() {
      return  Object.assign({}, this.props, { children: this.props.children.props.children } );
  }

  render() {
    return <div id="wrapper">
      <header>
        <Navigation />
      </header>

      { /* React.cloneElement( this.props.children, this.cleanProps() ) */ }
      <div id="sections">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <footer>
        <p>powered by Vagui © 2010 - 2016</p>
      </footer>
    </div>
  }
}
