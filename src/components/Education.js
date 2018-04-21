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
            <em className="date">June 2014</em>
          </p>

          <ul>
            <li> Thesis: "Only Some Unicorns are Ugly: How People Understand Different Types of Meaning"</li>
            <li style={{fontStyle: 'italic'}}>Senior project using eye-tracking to evaluate the time course of verification when listeners are provided an utterance that includes a scalar implicature. </li>

            </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
