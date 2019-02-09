import React from "react";
import styled from "styled-components";
import {
  Title,
  Column,
  Row,
  TextArea,
  Input,
  Label,
  Button,
  Text
} from "../../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 5em 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.i`
  font-size: 2em;
  margin-right: 0.75em;
  color: #505d68;
`;

export default function ContactForm() {
  return (
    <Wrapper>
      <Column>
        <Title>Reach us</Title>
        <a href="tel:4193677341">
          <Row margin="1em 0" alignitems="center">
            <Icon className="fal fa-mobile-android" />
            <Text post>419-367-7341</Text>
          </Row>
        </a>
        <a href="mailto:jet@creative114.com">
          <Row margin="1em 0" alignitems="center">
            <Icon className="fal fa-envelope" />
            <Text post>jet@creative114.com</Text>
          </Row>
        </a>
        <Row margin="1em 0" alignitems="center">
          <Icon className="fal fa-map-pin" />
          <Text post>
            801 Seminole Blvd, suite 114
            <br /> Largo, FL 33770
          </Text>
        </Row>
        <a className="drift-open-chat">
          <Row margin="1em 0" alignitems="center">
            <Icon className="fal fa-comment" />
            <Text post>Chat now</Text>
          </Row>
        </a>
      </Column>
      <Column>
        <Title>Leave us a note</Title>
        <Form action="https://formspree.io/xelajgzm" method="POST">
          <Label htmlFor="name" login>
            Name *
            <Input type="text" name="name" />
          </Label>
          <Label htmlFor="_replyto" login>
            Email *
            <Input type="email" name="_replyto" />
          </Label>
          <Label htmlFor="message" login>
            Message *<TextArea name="message" />
          </Label>
          <Button type="submit" primary>
            Send
          </Button>
        </Form>
      </Column>
    </Wrapper>
  );
}
