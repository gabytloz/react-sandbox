import React,{PropTypes} from "react";
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
    this.navigationStyle = this.navigationStyle.bind(this);

    this.state = {
      menuClassActive: false,
    }
  }

  cleanProps() {
    return  Object.assign({}, this.props, { children: this.props.children.props.children } );
  }

  fixedMenu(current, target) {
    return current >= target
  }

  navigationStyle(){
    const firstBlockHeight = document.getElementById( "about" ).offsetTop - document.getElementById( "brandBlock" ).offsetTop;
    var   mainMenuHeight   = document.getElementById( "about" ).offsetTop - document.getElementById( "mainMenu" ).offsetTop;
    var   windowScrolled   = window.scrollY;

    if( this.fixedMenu(windowScrolled, firstBlockHeight)){
      this.setState({
        menuClassActive: true
      })
      console.log("active - windowScrolled:" + windowScrolled + "firstBlockHeight:" + firstBlockHeight + "mainMenuHeight:" + mainMenuHeight)
    }
    else{
      this.setState({
        menuClassActive: false
      })
      console.log("inactive - windowScrolled:" + windowScrolled + "firstBlockHeight:" + firstBlockHeight + "mainMenuHeight:" + mainMenuHeight)
    }
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

    // Listen scroll to see if navigation should be fixed on top
    window.addEventListener('scroll', this.navigationStyle);
  }

  componentWillUnmount(){
    // Remove listener for navigation
    window.removeEventListener('scroll');
  }

  render() {
    return <div id="wrapper">
      { /* React.cloneElement( this.props.children, this.cleanProps() ) */ }
      <div id="pageWrap">
        <Home />
        <header>
          <Navigation menuClass={this.props.menuClass} isMenuClassActive={this.state.menuClassActive} />
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

App.propTypes = {
  menuClass: React.PropTypes.string,
}

App.defaultProps = {
  menuClass: 'fixed',
}