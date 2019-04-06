import React from "react";
import styled from "styled-components";
import Footer from "../../shared/Footer";
import Helmet from "react-helmet";
import Splash from "../../shared/Splash";
import { Input, Label, Button, TextArea } from "../../../theme/index";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em auto;
  @media (max-width: 780px) {
    align-items: center;
  }
`;

function StartNowForm() {
  return (
    <Form action="https://formspree.io/xjeeoeem" method="POST">
      <Label htmlFor="businessName" login>
        Business name *
        <Input type="text" name="businessName" />
      </Label>
      <Label htmlFor="businessWebsite" login>
        Business website *
        <Input type="text" name="businessWebsite" />
      </Label>
      <Label htmlFor="contactName" login>
        Contact name *
        <Input type="name" name="contactName" />
      </Label>
      <Label htmlFor="_replyto" login>
        Email *
        <Input type="email" name="_replyto" />
      </Label>
      <Label htmlFor="phone" login>
        Phone *
        <Input type="phone" name="phone" />
      </Label>
      <Label htmlFor="budget" login>
        Budget *
        <Input type="text" name="budget" />
      </Label>
      <Label htmlFor="objective" login>
        Objective *<TextArea name="objective" />
      </Label>
      <input
        type="hidden"
        name="_next"
        value="http://creative114.com/#/thanks"
      />
      <Button type="submit" primary>
        Send
      </Button>
    </Form>
  );
}

export default function StartNow() {
  return (
    <div>
      <Helmet
        title="Our Team | Brand Engagement, Marketing, Design"
        meta={[
          { name: "description", content: "Start Now Page for Creative114" },
          { property: "og:type", content: "website" },
          {
            property: "og:title",
            content: "Brand Engagement, Marketing, Design"
          },
          { property: "og:url", content: "http://creative114.com" }
        ]}
      />
      <Splash
        type="contact"
        title="Start Now"
        src="https://player.vimeo.com/external/320616573.hd.mp4?s=e3fb81e04f5a50ece286dee153b5d1a8166cc62f&profile_id=169"
      />

      <StartNowForm />
      <Footer />
    </div>
  );
}
