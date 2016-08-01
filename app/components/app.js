import React from "react";
import Navigation from "./modules/navigation";

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

      { React.cloneElement( this.props.children, this.cleanProps() ) }

      <footer>
        <p>powered by Vagui © 2010 - 2016</p>
      </footer>
    </div>
  }
}
