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
          <img src="https://lh3.googleusercontent.com/xuaCvxY80vWnjC8ZxTFQaAGRP3ci5J5Zpcy2hS5gc-1if78f2ndpsc5gzxxipijU_UE726b_UQaDOQvRT_M5md_TYDdG_BYkUG_89hvkuOi4X_CQyA0vLmNwmKwv9Db1N7TMBpaw9YA7ioc_sAnw9psLnXDjwPz3cbIODij3_7JPiItpK7z8mZJ1-GUZgs3p19oqXEDghPImJ-1rTD3QROrD-tMqKFz4rxVrnj7Awh0gRUXzJ-nx7hvGFn-AgIjrLoXIvX0zxj7WAXu2JGWGklbGsIzYvFTr0mYCI0q631xoi4lPvoHVSh1fwbS6zIukvRm33vfCojkdp20carVm7lcfZqvU_uytrY5SVfIsP4h4kGRXnHrp4GiC6pgQFB159nDtkSt9MZ9R19--QVcLpVrzoN6tm_ZYjhoc6VC5tUHvXcTFb6JU3M10hgcp1lL20uRn3RmFLGQ9DjXIw_-KZnzAfk2ATjbMnE_jryUdmxK1So_4npnX4fq5BcasEjnHBo86oRWws35X-RIS1a92T195P72CfnWupgU6Qknw2WVHoLFSQQ8vMnOsNAqd64oYGj2j4DbSd4jCki-lodg8vRG434OyBqw8EHjgWZ9k0kD_S32SUOJYWkHHjohOn8FJ__rPXDJ3AeIM7kAtM7TlDTYD06mcmSA=w1123-h659-no" width="90%" />
          <br />
          <span class="caption">▲ The shelf cloud formation that preceded the derecho event.</span>

          <h3>Introduction</h3>

          <p>
            The June 29 derecho, now officially known as the Ohio Valley/Mid-Atlantic Derecho, was an intense wind storm that
            started out in northwest Indiana and began a 600 mile-long path of destruction through the Midwest. Occurring in the
            middle of a record heat wave, the 2012 derecho was an unexpected event that will continue to live on in the minds of those
            who experienced it.
          </p>
        </div>

        <br />

        <div ref={this.before} id="brewingStorm">
          <img src="https://www.spc.noaa.gov/misc/AbtDerechos/images/2012jun29/12jun29_loop_ir.gif"/>

          <div className="paragraph">
            <span class="caption">▲ This 24-hour infrared data satellite loop shows the path of the derecho, including its
            development, evolution, and death, on June 29, 2012.</span>
            <h3>A Brewing Storm</h3>
            <p>
              No one could have predicted the storm. Several places throughout the southern Plains, such as Charlotte, Nashville, and
              Raleigh were all experiencing record-setting maximum temperatures in June – all above 100°F, with Nashville hitting a
              staggering 109°F. Washington D.C.’s high of 104°F was the hottest temperature in June to be recorded in 142 years.
            </p>

            <p><b>Several things led to the development of the derecho:</b></p>

            <div className="point">
              <div className="icon"><img src="https://lh3.googleusercontent.com/IbTdlOhWJ4r4VpiEHLWrGEtslnSB6kmnEcjD5fn-iAoZbkiMiMsKRJ8wDYx6KM3mMTjtvFo7oLcZGRiJOR-hjbgmVQ5-tQGMEhQ7vlcHWFRvn8b2YIv4WrSXWpBvVjAK20_L3aw_RoX8GrUAbOK1rm8xJDbV_b3qB5xpmDvqUKcuGhHdkWu0KwgFH4y3mmC5C6gY4BSPNwP9H_QUjm0mQtSb3IqCKXP9zhLEBlcc1yye4ibw0tY6LA9bz58QCwMAb_aJnfHOYkki7LcgStf--TjI8ljIWT7FpNqub2Lw31aa04Um3J91g3ntl9C1qVn-IaXNU0Wqw9FqvbXYS9gJ4HWq6HNP_afPgeo-dKQVkkeVYh7-Z5v2SmbN6bxjbGj5NFz5RSyZsgKqxKnVHJRyTA4TCsFnXC0L3WzINPApH1IHxdNtaYcXXVgtspntF_0Vq3KU6Ds452QxaKpWe86aGs4U7Cd7LQs6uDos0INjCCwbvTK2behoyy53FmAMfAzSB2ReuTttAM60f7cjrXVHK-HjQG2ZLJMcqzI33dtg5ULb49xUFVQEBdlISBhgeYLpBemmFvi5ZyGuz2CFIx4lQFJsonE6_tkBBJU7N8jxTw_jSreBI9NHFNh8FlWiiddlm6ArAD0SZ9BkzYfGyaPHqMsUR32fSic=w416-h115-no" width="80px"/></div>
              <div className="desc">
                A <u>cold front</u> at the Great Lakes created a divide between a stable airmass in the north and a moist, unstable airmass in
                the south
              </div>
            </div>

            <div className="point">
              <div className="icon"><img src="https://lh3.googleusercontent.com/xaYOG_6wm2hTy8g65VBoeTThhlJQ8D55Opf-MFHrxM9p-Z8GT7z2OPx5QlEXcSHxDqnP9Sb3x7NVWN20-oduMqpiespGAmHSJlTlgidYqL7tMGodIQDFHGVg6k5D8asWk-oiOVhSz6JAUMKkGu_B2ccYhKLg7oz9j_c4ZWlgxi7dS2gKbyr46i8Io_JzEau61j2aMio83F4Ou2JwT6B86Gtf1-tSXeMn82ObbZCNTkXAE0c16Aw-qUWoFxK-dEeO1UpRhflOCtow6vwIQfrgkMy6WRjO6j6uxXNRxrF6SMYXGjCTNPASTK1gHMBDBLD6jvNUOs-vzkgnkzWtOj7lvRqSfgHm3YCXTwNBRGtvj0yVZU9qjONb9PYitKXfJ8Mt4uhexCHitkz6WwvgwWtR4FzXfRkuOfaY8nnvc8IB_QW1UOYJcINxgwQiUaSp4L4EbGhj-lA2uWYJYTO7svJc9VhqxyZCg6Li0eNPJKuA097P59Tk-91xIzDOy1XnJQzBvQjXhRXKkpYEcY3C25IgGSn5oNBP6nyPtd0BVsqYW9V5vfvaAMRfmGWLXZXi2jfSH2eKI8WouJjEd9W5hwRA8Ie8pA6OWiLnskwgoEKQU2aiAdJD2WSBseHdktFznr2lTtaHjapSd8ircVmHABkS-xDrvDQ-SmE=s123-no" width="45px"/></div>
              <div className="desc">
                The hot and humid air in the south rapidly decreased in temperature with altitude (a <u>steep lapse rate</u>), causing storm updrafts
                to form
              </div>
            </div>

            <div className="point">
              <div className="icon"><img src="https://lh3.googleusercontent.com/OZVYARXSCc_n87DtcxMfj0A5-BEXV2zV5GRUe7pnBZk5uIIOP0ZQMRetWquJ2dYSPIzTo_7fKMg5_3riJefu-S2luvZJ1rgHK255CfLGcORdy_e0OoFyFRnHdiZgpO12Aqz4bbDAlP9zshuxQPA08Kf0hWWcq_bflBfGegvjrR4qICKWjjR5PJ7j4b4ilNkXbU1yRVq_hVmnZltJng8cJEkXriH8P0G0F_MFFma6wTn7b78V9I8_50Fq5hk0H-xOgA7fvC0SCeW7g5xmVHcv1oRZAnkx6eeembx-FrEDdUxwAUXTxGrG-LA-jBxXgIbJvQ9v5eCYxGC7OrHPh3_0-E5Ncq21rn_HMne8OCD5FAUGMZKs99BgTNgRV1mnkoHMPyQ7iyEFBTS--klTnZEdtgOlJBml86LjerqPx77dobTBGigiCMP-D_yG5CPcxdJ4D333OgYKnXbNQeyTQnvmk8iCENnIdKW93KzxIDRr5asan4Kl9618pL50tRNu2x5w9gtS3nsVysz1KxaXv9q8uR26ccqzfTPScZSakbuRckAuAjv9cj7JY-DYJwMwpjzhdK_qdlN_dG7WROjo2Wm-23lWLmsTWj9P5ePIzRKXCGXHwiY3EBPQe6Nn5xz9fYA71LZ1nOxwbhQXW8OZ60jVEeuUY7SPC-M=w145-h141-no" width="45px"/></div>
              <div className="desc">
                A <u>squall line</u> formed across Toledo and Dayton in Ohio, blowing down trees and roofs and racing towards Kentucky and West Virginia
              </div>
            </div>

            <a href="/about-derechos">
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/WxMIfVS9d4k?controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/HdZFgJco_PU?controls=0&amp;start=131" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/03IABbBjRB4?controls=0&amp;start=131" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
          <span className="footnote"><a href="/resources">View References</a></span>
        </div>

      </div>
    );
  }

}

export default DerechoEvent;
