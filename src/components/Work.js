import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Moss Rehabilitation Research Institute (MRRI)</h3>
          <p className="info" id="main-label">
            Research Assistant
            <span>&bull;</span>
            <em className="date">June 2014 - August 2018</em>
          </p>
        </div>
        <ul className="twelve columns">
          <li>
            <h5>Cognitive Neurophysiology &amp; Neuropsychology Lab</h5>
            <p className="info">MRRI; PI: Edward Wlotko, Ph.D.</p>
            <p>
              Examining left vs. right hemispheric contributions to language comprehension,
              predictive processing,
              and language in the aging brain via EEG/ERP and behavioral experiments.
            </p>
          </li>
          <li>
            <h5>Thompson-Schill Lab</h5>
            <p className="info">UPenn; PI: Sharon Thompson-Schill, Ph.D.</p>
            <p> 
              Studying the ways in which the brain combines novel concepts and whether those 
              types of conceptual combination are surpported by different neural substrates via neuroimaging and behavioral methods.
            </p>
          
          </li>
          <li>
            <h5>Language &amp; Aphasia Lab</h5>
            <p className="info">MRRI; PI: Myrna Schwartz, Ph.D.</p>
            <p> 
              Identifying the neural correlates of post-stroke language impairment via voxel-based lesion-symptom mapping (VLSM) alongside behavioral methods.
            </p>
          </li>
          <li><h5>Language &amp; Cognitive Dynamics Lab</h5> 
              <p className="info">Drexel; PI: Daniel Mirman, Ph.D.</p>
              <p> 
              Investigating language deficits and recovery after left-hemisphere stroke (aphasia) using behavioral and eye-tracking experiments, 
              computational modeling, and lesion-symptom mapping. 
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Work;
