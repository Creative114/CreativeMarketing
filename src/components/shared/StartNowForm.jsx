import React from "react";
import styled from "styled-components";
import {
  Input,
  Label,
  Button,
  TextArea,
  Title,
  Select
} from "../../theme/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  width: 475px;
  height: 775px;
  margin: 4.5em auto;
  z-index: 10000000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 780px) {
    align-items: center;
  }
`;

export default function StartNowForm() {
  return (
    <Wrapper>
      <div style={{ textAlign: "center" }}>
        <Title>Start now</Title>
      </div>
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
          <Select id="budget" name="budget">
            <option value="first">$1,000-$2,500</option>
            <option value="second">$2,500-$5,000</option>
            <option value="third">$5,000-$7,500</option>
            <option value="forth">$7,500-$10,000</option>
            <option value="fifth">$10,000 +</option>
          </Select>
        </Label>

        {/* <Label htmlFor="budget" login>
          Budget *
          <Input type="text" name="budget" />
        </Label> */}
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
    </Wrapper>
  );
}
