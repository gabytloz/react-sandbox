import React from "react";
import Navigation from "./modules/navigation";

import Home       from "./section/home";
import About      from "./section/about";
import Services   from "./section/services";
import Portfolio  from "./section/portfolio";
import Contact    from "./section/contact";

import { scrollTo } from "../lib/smooth-scrolling";

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  cleanProps() {
      return  Object.assign({}, this.props, { children: this.props.children.props.children } );
  }

  componentDidMount() {
    const { pathname }  = this.props.location;
    const elementId     = pathname.replace( /^\//, '' );
    const element       = document.getElementById( elementId );

    if ( element ) {
      scrollTo( document.body, element.offsetTop, 350 );
    } else {
      scrollTo( document.body, 0, 0 ); // No need for smooth scrolling here
    }
  }

  render() {
    return <div id="wrapper">
      { /* React.cloneElement( this.props.children, this.cleanProps() ) */ }
      <div id="pageWrap">
        <Home />
        <header>
          <Navigation />
        </header>
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
