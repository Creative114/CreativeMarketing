import React from "react";
import Splash from "../../shared/Splash";
import Footer from "../../shared/Footer";
import Helmet from "react-helmet";
import ContactForm from "../../shared/ContactForm";

export default function Contact() {
  return (
    <div>
      <Helmet
        title="Our Team | Brand Engagement, Marketing, Design"
        meta={[
          { name: "description", content: "Contact Page for Creative114" },
          { property: "og:type", content: "website" },
          {
            property: "og:title",
            content: "Brand Engagement, Marketing, Design"
          },
          { property: "og:url", content: "http://creative114.com" }
        ]}
      />
      <Splash type="contact" title="Contact" />
      <ContactForm />
      <Footer />
    </div>
  );
}
