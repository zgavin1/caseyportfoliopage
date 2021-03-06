import React from "react";
import {
  FaGithub,
  FaEnvelopeO,
  FaTwitter,
  FaGraduationCap,
  FaLinkedin,
  FaBook
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://twitter.com/csmferrara">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/casey-ferrara-b56b50b1/">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/caseyseana">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.researchgate.net/profile/Casey_Ferrara">
        <FaBook />
      </a>
    </li>
    <li>
      <a href="https://psychology.uchicago.edu/directory/casey-ferrara">
        <FaGraduationCap />
      </a>
    </li>
    <li>
      <a href="mailto:caseyferrara@gmail.com">
        <FaEnvelopeO />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
