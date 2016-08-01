import React from "react";
import Navigation from "./navigation";

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
        <p>Gabysoft™, me la pelan todos</p>
      </footer>
    </div>
  }
}
