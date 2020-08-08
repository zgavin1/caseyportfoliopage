import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Casey Ferrara</h1>
      <h3>
        Psychology Ph.D. student studying the intersection of language and cognition via sign language, spoken language, and gesture.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
