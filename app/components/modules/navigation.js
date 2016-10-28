import React from "react";
import {Link} from "react-router";

export default class Navigation extends React.Component {
    constructor(props) {
        super( props );
    }

    render() {
      return <nav id="mainMenu" className={this.props.isMenuClassActive ? this.props.menuClass: ''}>
          <div className="wrap">
            <div className="container">
              <a id="topBrand" href="welcome" title="Return to top">VAGUI - Go to top<span className="icon"></span>
              </a><ul>
                <li><Link to="/about" activeClassName="active">About</Link></li>
                <li><Link to="/services" activeClassName="active">Services</Link></li>
                <li><Link to="/portfolio" activeClassName="active">Portfolio</Link></li>
                <li><Link to="/contact" activeClassName="active">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    }
}
