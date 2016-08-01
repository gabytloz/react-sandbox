import React from "react";

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return <section id="about">
        <div className="container">
          <h3>Hello there!</h3>
          <div className="row">
            <div className="col-xs-12 col-sm-5">
              <h2>My name is <em>Gabriela Vargas</em></h2>
            </div>
            <div className="col-xs-12 col-sm-7">
                <p>Since I was 16 years old <em>I liked</em> the idea of <em>creating</em> things with the help of <em>html</em> and <em>css</em>; and I still do.</p>
                <p className="indent">Would you like to work with me?</p>
                <a download="cv_vagui2015.pdf" href="/wp-content/uploads/2015/12/cv_vargas2015.pdf" title="Download Gabriela Vargas' CV" className="aquaButton" id="cvDownload">download my CV</a>
                <p className="text-right">or <a href="http://localhost/vagui/project/index.php/en/contact/" title="Contact me">contact me</a></p>
            </div>
          </div>
        </div>
      </section>
    }
}