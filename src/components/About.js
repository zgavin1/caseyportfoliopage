import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/caseyprofile.png";
import cv_pdf from "../assets/images/pdfs/CFerrara_CV.pdf";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        I received my BA in Psychology and Linguistics from Swarthmore College in 2014. For the past four, years I've worked at Moss Rehabilitation Research Institute
        studying post-stroke aphasia. In the fall of 2018 I'm excited to begin a Ph.D. program at the University of Chicago working in the Goldin-Meadow lab studying language and cognition.
        My current research interests include language development across signed and spoken languages, the influence of early
        linguistic experience on cognitive development, the neural organization of language, linguistic universals, and getsure.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Casey Ferrara</span>
              <br />
              <span>
                181 Gay St,
                <br /> Philadelphia, PA 19127
              </span>
              <br />
              <span>(908) 227-3042</span>
              <br />
              <span>caseyferrara@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={cv_pdf} className="button" >
                <FaCloudDownload /> Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
