import React, { Component } from 'react';

class DerechoEvent extends Component {
  constructor() {
    super();
    this.intro = React.createRef();
    this.before = React.createRef();
    this.storm = React.createRef();
    this.aftermath = React.createRef();
    this.conclusion = React.createRef();
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(section) {
    if (section == "intro") {
      window.scrollTo(0, this.intro.current.offsetTop);
    } else if (section == "before") {
      window.scrollTo(0, this.before.current.offsetTop);
    } else if (section == "storm") {
      window.scrollTo(0, this.storm.current.offsetTop);
    } else if (section == "aftermath") {
      window.scrollTo(0, this.aftermath.current.offsetTop);
    } else if (section == "conclusion") {
      window.scrollTo(0, this.conclusion.current.offsetTop);
    }
  }

  render() {
    return (
      <div id="derechoSection">
        <h2>The Ohio Valley /<br /> Mid-Atlantic Derecho</h2>
        <div className="botBorder-black"></div>
        <span style={{ "textAlign": "center" }}>June 29, 2012</span>

        <div ref={this.intro} id="introduction">
          <div id="contents">
            <ul id="contents">
              <h3>Contents</h3>
              <li onClick={() => {this.scrollToSection("intro")}}>Introduction</li>
              <li onClick={() => {this.scrollToSection("before")}}>A Brewing Storm</li>
              <li onClick={() => {this.scrollToSection("storm")}}>Disaster Strikes</li>
              <li onClick={() => {this.scrollToSection("aftermath")}}>Aftermath</li>
              <li onClick={() => {this.scrollToSection("conclusion")}}>Conclusion</li>
            </ul>
          </div>
          <img src="media/derecho1.jpg" width="90%" />

          <h3>Introduction</h3>

          <p>
            The June 29 derecho storm, now officially known as the Ohio Valley/Mid-Atlantic Derecho, was an intense wind storm that
            started out in northwest Indiana and began a 600-mile long path of destruction through the Midwest. Occurring in the
            middle of a record heat wave, the 2012 derecho was an unexpected event that will continue to live on in the minds of those
            who experienced it.
          </p>
        </div>

        <br />

        <div ref={this.before} id="brewingStorm">
          <img src="https://www.spc.noaa.gov/misc/AbtDerechos/images/2012jun29/12jun29_loop_ir.gif"/>

          <div className="paragraph">
            <h3>A Brewing Storm</h3>
            <p>
              No one could have predicted the derecho. Several places throughout the southern Plains, such as Charlotte, Nashville, and
              Raleigh were all experiencing record-setting maximum temperatures in June – all above 100°F, with Nashville hitting a
              staggering 109°F. Washington D.C.’s high of 104°F was the hottest temperature in June to be recorded in 142 years.
            </p>

            <p><b>Several things led to the development of the derecho:</b></p>

            <div className="point">
              <div className="icon"><img src="media/coldFront.png" width="80px"/></div>
              <div className="desc">
                A <u>cold front</u> at the Great Lakes created a divide between a stable airmass in the north and a moist, unstable airmass in
                the south
              </div>
            </div>

            <div className="point">
              <div className="icon"><img src="media/thermometer.png" width="45px"/></div>
              <div className="desc">
                The hot and humid air in the south rapidly decreased in temperature with altitude (a <u>steep lapse rate</u>), causing storm updrafts
                to form
              </div>
            </div>

            <div className="point">
              <div className="icon"><img src="media/wind.png" width="45px"/></div>
              <div className="desc">
                A <u>squall line</u> formed across Toledo and Dayton in Ohio, blowing down trees and roofs and racing towards Kentucky and West Virginia
              </div>
            </div>

            <a href="https://kohzmay.github.io/geo250/about-derechos">
              <div className="button">
                Read more about the formation of derechos →
              </div>
            </a>

            <div className="quote">
              “So much energy was in that air mass, the setting sun had little effect.”
            </div>
          </div>
        </div>

        <div ref={this.storm} className="paragraph">
          <h3>Disaster Strikes</h3>
          <p>Explore some of the locations devastated by the derecho below.</p>

          <div className="location">Washington, D.C.</div>
          <div id="washington">
            <div className="twoCols">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/WxMIfVS9d4k?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <span>
                <b>“A massive trail of destruction”</b> <br />
                What was described as an “<em>unexpected and invisible ‘wall of wind’</em>” slammed into D.C. late at night on the 29th, with wind
                speeds bordering 80 mph. The wind was so strong that rain fell horizontally and lightning struck consistently. Trees and
                power lines toppled, cutting communication and electricity to many neighborhoods. Near D.C., a key communications facility
                lost power, which halted emergency 911 services.
              </span>
            </div>

          </div>

          <div className="location">West Virginia</div>
          <div id="virginia">
            <div className="twoCols">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/HdZFgJco_PU?controls=0&amp;start=131" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <span>
                <b>“Storm of the century”</b> <br />
                The derecho left more than half of West Virginia’s houses without power — some for more than two weeks. A state of emergency was
                declared as all but two of West Virginia’s 55 counties received some form of storm damage. Wind speeds hit a high of 78 mph in
                Charleston. Even after the storm, temperatures still soared into the hundreds, making recovery and clean-up attempts difficult.
              </span>
            </div>
          </div>

          <div className="location">Indiana</div>
          <div id="indiana">
            <div className="twoCols">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/03IABbBjRB4?controls=0&amp;start=131" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <span>
                <b>“Winds as strong as a tornado”</b> <br />
                The derecho formed in northwest Indiana, which is also where some of the most intense wind speeds were recorded: the Fort Wayne
                International Airport recorded a wind gust of 91 mph. The wind felled radio towers, trucks, and even building roofs. One
                observer reported seeing “<em>a downburst descend from the cloud directly ahead of him.</em>” The video on the left shows
                some incredible cloud formations seen during the storm.
              </span>
            </div>
          </div>
        </div>

        <div ref={this.aftermath} className="paragraph">
          <h3>Aftermath</h3>
          <p>
            The National Oceanic and Atmospheric Administration (NOAA) admits that this event had not been forecasted well in advance, though
            derechos (warm-season derechos in particular) are difficult to forecast, because they result from small-scale mechanisms that
            don't appear more than 12-24 hours in advance. Furthermore, many forecasters thought that the derecho would lose traction upon
            crossing the Appalachian Mountains in the mid-Atlantic.
          </p>

          <div className="point">
            <div className="icon"><img src="https://cdn2.iconfinder.com/data/icons/harry-potter-outline-collection-1/60/12_-_Harry_Potter_-_Outline_-_Harrys_Lightning_Scar-256.png" width="50px"/></div>
            <div className="desc">
              More than 4 million people without power
            </div>
          </div>

          <div className="point">
            <div className="icon"><img src="https://cdn2.iconfinder.com/data/icons/essential-web-1-1/50/heart-broken-break-shock-bolt-256.png" width="45px"/></div>
            <div className="desc">
              22 deaths (mostly caused by falling trees/objects)
            </div>
          </div>

          <div className="point">
            <div className="icon"><img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/money-256.png" width="45px"/></div>
            <div className="desc">
              Approx. $2.6 billion in damage
            </div>
          </div>
        </div>

        <div ref={this.conclusion} className="paragraph">
          <h3>Conclusion</h3>
          <p>
            The Ohio Valley/Mid-Atlantic Derecho was the first derecho to capture nationwide media attention, because of the sheer amount of
            damage it caused and the number of metropolitan cities it hit. Having travelled over 700 miles, it serves as a reminder of the
            importance of good forecasting to avoid suffering similar casualties from future derechos and storms.
          </p>

          <div className="quote">
            “Beware of the bull, the untamed, beastly derecho cut loose from of Ohio, because that encounter is destined to come once again.”
          </div>

          <div className="eof"><b>■</b></div>
          <span className="footnote"><a href="https://kohzmay.github.io/geo250/resources">View References</a></span>
        </div>

      </div>
    );
  }

}

export default DerechoEvent;
