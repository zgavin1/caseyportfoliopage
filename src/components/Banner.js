import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Casey Ferrara</h1>
      <h3>
        Prospective Ph.D. student researching linguistics and cognitive neuroscience.
      </h3> 
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
