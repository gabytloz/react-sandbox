import React from "react";

export default class Home extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return <section id="brandBlock">
        <span className="heightControl"></span><div className="wrap">
          <h1>
            <span>Vagui &ndash; </span>
            <em>
              Layout coding
              <span id="andDecor"> and </span>
              web design
            </em>
          </h1>
        </div>
      </section>
    }
}