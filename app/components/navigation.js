import React from "react";
import {Link} from "react-router";

export default class Navigation extends React.Component {
    constructor(props) {
        super( props );
    }

    render() {
      return <ul>
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex >Home</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
    }
}
