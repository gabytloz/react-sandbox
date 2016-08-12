import React from "react";
import { Carousel } from 'react-bootstrap';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return <section id="portfolio" className="whiteBack">
        <div className="container">
          <h2>My work</h2>
        </div>

        <Carousel id="portfolioSlider" controls={ true }>
          <Carousel.Item>
            <a href="http://cruzrojatijuana.org.mx/" title="Visit website" target="_blank" id="cr-img" className="portfolioImg laptop external">Image of the Mexican Red Cross' website <span className="visitWeb">Visit website</span></a>
            <div className="container">
              <h3>About <em>Mexican Red Cross</em></h3>

              <div className="row">
                <div className="col-xs-12 col-sm-5">
                  <p>A worlwide recognized organization that provides medical help and specializes in first response. </p>

                  <h4>The <em>problem</em></h4>
                  <p>The client didn’t have a website, but since it’s financed mostly by donations, the main priority became to make the donation data and tools easy to find and use.</p>
                  <p>The website links to this information in key parts of the site to make it available.</p>
                  <a href="contact" title="Contact me" className="blueButton">Contact me</a>

                </div>
                <div className="col-xs-12 col-sm-6 col-sm-offset-1 text-right">
                  <h4>My <em>contribution</em></h4>
                  <ul className="contributionList">
                    <li>layout coding</li>
                  </ul>
                  <p>Aside from coding the website,  this design features numerous css animations that activate when the element is on screen. This required a combination of css and javascript to activate the animations at the proper time. </p>
                  <ul className="skillsList">
                    <li>html</li><li>
                      css</li><li>
                      jQuery</li>

                  </ul>
                  <p className="credit">Design provided by <a href="http://somospool.com/" target="_blank" title="Pool branding (spanish only)" className="external">Pool branding</a><br />
                  Coded while working in  <a href="http://mintitmedia.com/" target="_blank" title="Mint IT  Media - Web design and development" className="external">Mint IT  Media</a></p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <a href="http://evottek.co/" title="Visit website" target="_blank" id="evo-img" className="portfolioImg devices external">Image of Evottek's website <span className="visitWeb">Visit website</span></a>
            <div className="container">
              <h3>About <em>Evottek</em></h3>

              <div className="row">
                <div className="col-xs-12 col-sm-5">
                  <p>Mexican company that offers automation and development solutions for precision machinery. They specialised in the transformation industry.</p>

                  <h4>The <em>problem</em></h4>
                  <p>The company offered their services to american and mexican companies, but they didn't have their information available online.</p>
                  <p>Since the solutions they specialise on are fairly delicate processes, the confidence in the company was negatively affected for the lack of online presence. Their website now features a bilingual site where they can give the background of the company and explain their services.</p>

                  <a href="contact" title="Contact me" className="blueButton">Contact me</a>

                </div>
                <div className="col-xs-12 col-sm-6 col-sm-offset-1 text-right">
                  <h4>My <em>contribution</em></h4>
                  <ul className="contributionList">
                    <li>layout coding</li>
                  </ul>
                  <p>This design was a project that required responsive behaviour and an efficient use of graphic elements. The website features css3 gradients and small sprite images where loaded first to lessen the amount of download time for mobile devices. </p>
                  <ul className="skillsList">
                    <li>html</li><li>
                      css</li><li>
                      Twitter Bootstrap</li><li>
                      jQuery</li>

                  </ul>
                  <p className="credit">Design provided by <a href="http://somospool.com/" target="_blank" title="Pool branding (spanish only)" className="external">Pool branding</a><br />
                  Coded while working in  <a href="http://mintitmedia.com/" target="_blank" title="Mint IT  Media - Web design and development" className="external">Mint IT  Media</a></p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <a href="https://www.mdkdelvalle.com/" title="Visit website" target="_blank" id="mdk-img" className="portfolioImg devices external">Image of Moo Duk Kwan Del Valle's website <span className="visitWeb">Visit website</span></a>
            <div className="container">
              <h3>About <em>Moo Duk Kwan Del Valle</em></h3>

              <div className="row">
                <div className="col-xs-12 col-sm-5">
                  <p>A mexican organisation that teaches the art of tae kwon do, the website belongs to a local branch in Tijuana, Mexico.</p>

                  <h4>The <em>problem</em></h4>
                  <p>The organisation entrusts each branch with marketing and advertising duties. This branch was interested in adding a website to their online presence, that at the time only comprehended a facebook page.</p>
                  <p>In this new website the company can provide their clients with information about the sport and the school, since this branch has other local competitors the webpage has a non-obtrusive message that encourages the client to contact the owners for more information. Additionally, it contains a gallery with exclusive pictures of the students that can be shared in facebook by their relatives and friends, increasing the web traffic and extending the reach of the brand.</p>
                  <a href="contact" title="Contact me" className="blueButton">Contact me</a>

                </div>
                <div className="col-xs-12 col-sm-6 col-sm-offset-1 text-right">
                  <h4>My <em>contribution</em></h4>
                  <ul className="contributionList">
                    <li>
                    web design</li><li>
                    copy</li><li>
                    layout coding</li>
                  </ul>
                  <p>Aside from the design and front end development, for this website I was entrusted with the duty of creating the copy. The client provided the information that they used for their printed advertising, but to achieve the task of developing copy I had to do research about the sport and the organisation; since then, this new information has been used, aside from the website, in flyers and brochures.</p>
                  <ul className="skillsList">
                    <li>html</li><li>
                      css</li><li>
                      Twitter Bootstrap</li><li>
                      jQuery</li>

                  </ul>
                  <p className="credit">Backend development by <a href="http://www.cloverinteractive.com/hola/bienvenido-a-clover-interactive.html" target="_blank" title="Clover interactive" className="external">Clover interactive</a></p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <a href="http://dev.vagui.com/elsociable/" title="Visit website (cancelled)" target="_blank" id="sociable-img" className="portfolioImg laptop external">Image of El sociable's website <span className="visitWeb">Visit website</span></a>
            <div className="container">
              <h3>About <em>El sociable</em></h3>

              <div className="row">
                <div className="col-xs-12 col-sm-5">
                  <p>A project that offered a solution for sharing images from social events. The website developed minisites from html templates and included a picture gallery that could conveniently be shared online and downloaded to a computer. The project was never launched.</p>

                  <h4>The <em>problem</em></h4>
                  <p>The project needed to automatise the development of the minisites as much as possible to become a viable business. </p>
                  <p>This required the research of technologies and tools that made the required functionalities like tools for downloading big files, and gallery that was could be created with the contents of a folder an therefore could be updated easily for each client.</p>
                  <a href="contact" title="Contact me" className="blueButton">Contact me</a>

                </div>
                <div className="col-xs-12 col-sm-6 col-sm-offset-1 text-right">
                  <h4>My <em>contribution</em></h4>
                  <ul className="contributionList">
                    <li>
                    web design</li><li>
                    logo design</li><li>
                    layout coding</li>
                  </ul>
                  <p>This project was pretty much just an idea that was becoming something else. Additionally to my design skillsList, most of my work was to figure out how could the business work, finding the "but"s and the "how"s. Sadly the project was cancelled.</p>
                  <ul className="skillsList">
                    <li>html</li><li>
                      css</li><li>
                      jQuery</li>
                  </ul>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <a href="http://dev.vagui.com/adell/" title="Visit inspirational website" target="_blank" id="adell-img" className="portfolioImg devices external">Image of Adell's inspirational website <span className="visitWeb">Visit website</span></a>
            <div className="container">
              <h3>About <em>Adell image</em></h3>

              <div className="row">
                <div className="col-xs-12 col-sm-5">
                  <p>This is a fake brand for a makeup artist that offered other beauty solutions. Inspired by a mexican makeup artist that had a deprecated website. </p>

                  <h4>The <em>problem</em></h4>
                  <p>The inspiration source had a website with an old design developed with flash, that didn't match the kind of clientele he had. The website had a black background and a limited colour palette, and the information was hard to access. </p>
                  <p>In this inspirational website the  information was reordered (currently the text is just a placeholder), the colour palette was extended and the stock images where given appealing rotation effects to replace the animations from the old website.</p>
                  <a href="contact" title="Contact me" className="blueButton">Contact me</a>

                </div>
                <div className="col-xs-12 col-sm-6 col-sm-offset-1 text-right">
                  <h4>My <em>contribution</em></h4>
                  <ul className="contributionList">
                    <li>
                    web design</li><li>
                    layout coding</li>
                  </ul>
                  <p>This is a personal project that intended to show the full potential of the brand. All design and structure of the content was created by me.</p>
                  <ul className="skillsList">
                    <li>html</li><li>
                      css</li><li>
                      Twitter Bootstrap</li><li>
                      jQuery</li>

                  </ul>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>{ /* #portfolioSlider /.carousel  */ }
      </section>
    }
}
