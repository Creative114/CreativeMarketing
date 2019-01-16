import React from "react";
import Splash from "../../shared/Splash";
import Values from "../../shared/Values";
import Careers from "../../shared/Careers";
import Team from "../../shared/Team";
import Footer from "../../shared/Footer";

export default function About() {
  return (
    <div>
      <Splash type="about" title="About" />
      {/* <Team /> */}
      <Values />
      <Careers />
      <Footer />
    </div>
  );
}
