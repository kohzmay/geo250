import React, { Component } from 'react';

import './index.css';

class AboutDerechosPage extends Component {

  render() {
    return (
      <div id="derechoSection-2" style={{ "backgroundImage": "url('media/derechobg.png')" }}>
        <h2 style={{ "color": "#fff" }}>About Derechos</h2>
        <div className="botBorder-black"></div>

          <div className="contentWhite">
            <h3>What<br />Are<br />Derechos?</h3>
            <p>
              A <b>derecho</b> (pronounced de-REY-cho) is a widespread and long-lived wind storm that brings with it thunderstorms and
              lightning. Its destructive power is similar to that of a tornado, though the damage usually happens
              in a straight line – a defining feature that gave the derecho its name (derecho  is the Spanish word
              for “straight”). Perhaps surprisingly, the more severe derechos occur during major heat waves,
              such as the June 29, 2012 derecho storm.
            </p>
          </div>

          <p style={{ "color": "#ffffff" }}><b>An event may be classified as a derecho if: </b></p>

          <div id="derechoFt">
            <div className="sect">
              <img src="media/ruler.png" width="50px" />
              <span>Length of wind damage >250 miles (approx. 400 km)</span>
            </div>

            <div className="sect">
              <img src="media/wind-white.png" width="50px" />
              <span>Wind gusts >58 mph (93 km/h) along its length</span>
            </div>

            <div className="sect">
              <img src="media/storm.png" width="50px" />
              <span>Contains certain storm structural features*</span>
            </div>

          </div>

          <p style={{ "color": "#ffffff", "fontSize": "14px" }}>*Recently proposed; not official</p>

          <div className="section2">

            <div className="contentWhite-left">
              <h3>How do<br />derechos<br />form?</h3>
              <p>
                There are several steps that lead to the development of derechos:

                <ol>
                  <li>A bow echo forms. Bow echoes are convective storm systems shaped like an archer's bow; these
                  storms usually develop when tropospheric winds are strong and unidirectional
                  </li>
                  <li>These strong winds help create an intense gust front ahead of downdrafts that have been cooled
                  by rain – a product of the bow echo.</li>
                  <li>The cooled downdrafts expand and spread horizontally, forcing lighter and warmer air to move
                  upwards along the gust front, allowing the storm to maintain its strength even over long distances.</li>
                  <li>Shelf clouds (pictured) are tell-tale signs of gust fronts.</li>
                  <li>This process repeats as the derecho moves along its course.</li>
                </ol>
              </p>
            </div>

            <div className="images">
              <img src="https://www.spc.noaa.gov/misc/AbtDerechos/images/misc/piccld79jul24.png" />
              <img src="https://cdn.vox-cdn.com/thumbor/u9oUtjaUe2MUrsR8FqXEQEhkBWc=/0x0:727x485/1200x800/filters:focal(304x244:420x360)/cdn.vox-cdn.com/uploads/chorus_image/image/59731361/nats8odipwx01.1526330812.jpg" />
              <p style={{ "color": "#ffffff", "fontSize": "14px", "lineHeight": "1.5" }}>▲ Although derechos aren't necessarily associated with a
              particular cloud formation, they are often preceded by ominous <b>shelf clouds</b>.</p>
            </div>
          </div>
      </div>
    );
  }

}

export default AboutDerechosPage;
