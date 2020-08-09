import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Swarthmore College</h3>
          <p className="info" id="main-label">
            Bachelor of Arts in Psychology & Linguistics
            <span>&bull;</span>
            <em className="date">2014</em>
          </p>

          <ul>
            <li> Undergraduate Thesis (2014): "Only Some Unicorns are Ugly: How People Understand Different Types of Meaning"</li>
            <li style={{fontStyle: 'italic'}}>Senior project using eye-tracking to evaluate the time course of verification when listeners are provided an utterance that includes a scalar implicature. </li>
          </ul>
        </div>

        <div className="twelve columns">
          <h3>University of Chicago</h3>
          <p className="info" id="main-label">
            PhD, Psychology
            <span>&bull;</span>
            <em className="date">Expected completion in 2023</em>
          </p>

          <ul>
            <li> Master's Thesis (2020): "From Frozen to Flexible: Iconic Modification in ASL"</li>
            <li style={{fontStyle: 'italic'}}>Second year master's project exploring (1) whether ASL signers iconically modify supposedly "frozen" lexeme signs, and (2) to what extent these modifications are constrained by linguistic and non-linguistic factors. </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
