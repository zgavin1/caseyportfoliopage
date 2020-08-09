import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/caseyprofile.png";
import cv_pdf from "../assets/images/pdfs/20200808_CFerrara_CV.pdf";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        I am a third year PhD student at the University of Chicago researching sign language, gesture, and iconicity.
        I received my BA in Psychology and Linguistics from Swarthmore College in 2014.
        From 2014 to 2018 I worked as a research assistant at Moss Rehabilitation Research Institute studying post-stroke aphasia.
        In the fall of 2018 I joined the UChicago Psychology PhD program in the Goldin-Meadow lab.
        My past work has explored language and cognition through (1) scalar implicature processing, (2) the interaction of semantic and phonological competition in aphasia, and (3) voxel-based lesion symptom mapping.
        My current research projects investigate (1) the extent to which ASL signs can be flexibly modified to maximize iconicity, (2) how these modifications compare to those seen in silent gesture, and (3) the intersecting influences of iconicity, perception, and biomechanics on the depiction of shape information in ASL and other sign languages.

        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Casey Ferrara</span>
              <br />
              <span>
                Chicago, IL 60616
              </span>
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
