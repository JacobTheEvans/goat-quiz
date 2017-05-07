import React, {PropTypes} from "react";
import LinkButton from "../components/link-button.js";

class About extends React.Component {
  render() {
    return (
      <section className="about">
        <div className="row">
          <div className="eight columns">
            <div className="about-desc">
              <p>G.O.A.T. or Generalized Occupational Aptitude Test is a test that every vault dweller (or at least every inhabitant of Vault 101) has to take at the age of 16. It's meant to figure out what sort of a job the person is best suited for in the vault.</p>
              <p>Now you to can test to see your skills, personilty, future job and so much more. Try it your yourself.</p>
            </div>
            <div className="btn-section">
              <LinkButton local="/quiz" additional="Start"/>
            </div>
          </div>
          <div className="four columns">
            <div className="goat-logo-cont">
              <img className="goat-logo" src="/images/goat.png"/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
