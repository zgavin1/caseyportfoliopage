import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Background from "../components/Background";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Background />
    <Portfolio />
    <Footer />
  </div>
);

export default IndexPage;
