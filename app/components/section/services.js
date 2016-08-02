import React from "react";

export default class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return <section id="services" className="grayBack">
        <div className="container">
          <h2>My services</h2>
          <ul>
            <li>
              <h3>Layout coding</h3>
              <p>If you are a freelance graphic designer you know that coding a website is not for everyone; there’s a lot to do: <strong>slicing</strong>, <strong>styling</strong> and <strong>tweaking</strong> until it’s perfect. But if you love design that much, why should you have to stop designing websites?</p>
              <p className="indent"><strong>Create the design of your dreams</strong> and <strong>get a functional website</strong>, without having to worry about the technicalities.</p>
              <a href="http://localhost/vagui/project/index.php/en/contact/" title="Contact me" className="blueButton">Contact me</a><a href="http://localhost/vagui/project/index.php/en/work/" title="View my work" className="aquaButton">View my work</a>
            </li>
            <li>
              <h3>Web design</h3>
              <p>If your business needs an online presence, chances are that you want a professional that helps you <strong>find out what you need</strong>, or maybe you just need a brush that makes your ideas come true.</p>
              <p className="indent">Whatever the case, rest assured that you can have a helping hand that contributes to your business; by <strong>creating just the visuals</strong> of your website or also the <strong>functional site</strong>.</p>
              <a href="http://localhost/vagui/project/index.php/en/contact/" title="Contact me" className="blueButton">Contact me</a><a href="http://localhost/vagui/project/index.php/en/work/" title="View my work" className="aquaButton">View my work</a>
            </li>
          </ul>
        </div>
      </section>
    }
}
