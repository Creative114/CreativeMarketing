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
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2em 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (max-width: 780px) {
    align-items: center;
  }
`;

const StyledRow = styled(Row)`
  margin: 1em 0;
  align-items: center;
  @media (max-width: 780px) {
    margin: 0.5em 0;
  }
`;

const StyledColumn = styled(Column)`
  @media (max-width: 780px) {
    margin: 1.5em 0;
    align-items: center;
  }
`;

const Icon = styled.i`
  font-size: 2em;
  margin-right: 0.75em;
  color: ${props => (props.social ? "#b9402d" : "#505d68")};
  @media (max-width: 780px) {
    margin: 0 0.5em;
    font-size: 1.5em;
  }
`;

export default function ContactForm() {
  return (
    <Wrapper>
      <StyledColumn>
        <Title>Reach us</Title>
        <a href="tel:4193677341">
          <StyledRow>
            <Icon className="fas fa-phone" />
            <Text post>419-367-7341</Text>
          </StyledRow>
        </a>
        <a href="mailto:jet@creative114.com">
          <StyledRow>
            <Icon className="fas fa-envelope" />
            <Text post>jet@creative114.com</Text>
          </StyledRow>
        </a>
        <StyledRow>
          <Icon className="fas fa-map-pin" />
          <Text post>
            801 Seminole Blvd, suite 114
            <br /> Largo, FL 33770
          </Text>
        </StyledRow>
        <span className="drift-open-chat">
          <StyledRow>
            <Icon className="fas fa-comment" />
            <Text post>Chat now</Text>
          </StyledRow>
        </span>
        <StyledRow>
          <a
            href="https://www.linkedin.com/showcase/creative114/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon social className="fab fa-linkedin-in" />
          </a>
          <a
            href="https://www.facebook.com/114brands"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon social className="fab fa-facebook-f" />
          </a>

          <a
            href="https://www.instagram.com/candigitalgroup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon social className="fab fa-instagram" />
          </a>
          <a
            href="https://vimeo.com/channels/1439000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon social className="fab fa-vimeo-v" />
          </a>
        </StyledRow>
      </StyledColumn>
      <StyledColumn>
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
          <input
            type="hidden"
            name="_next"
            value="http://creative114.com/#/thanks"
          />
          <Button type="submit" primary>
            Send
          </Button>
        </Form>
      </StyledColumn>
    </Wrapper>
  );
}
