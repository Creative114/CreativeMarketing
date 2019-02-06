import React from "react";
import Splash from "../../shared/Splash";
import Values from "../../shared/Values";
import Careers from "../../shared/Careers";
import Team from "../../shared/Team";
import Footer from "../../shared/Footer";
import Helmet from "react-helmet";

export default function About() {
  return (
    <div>
      <Helmet
        title="Our Team | Brand Engagement, Marketing, Design"
        meta={[
          { name: "description", content: "About Page for Creative114" },
          { property: "og:type", content: "website" },
          {
            property: "og:title",
            content: "Brand Engagement, Marketing, Design"
          },
          { property: "og:url", content: "http://creative114.com" }
        ]}
      />
      <Splash type="about" title="About" />
      <Team />
      <Values />
      <Careers />
      <Footer />
    </div>
  );
}
