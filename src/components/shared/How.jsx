import React from "react";
import styled from "styled-components";
import { Column, Text, Title, Subtitle, Row, Button } from "../../theme/index";

const Wrapper = styled.div`
  height: 100%;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5em 0 4em 0;
  @media (max-width: 780px) {
    width: 95%;
    padding: 1em 0;
    text-align: center;
    padding: 3em 0 1.5em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  margin: 0 auto;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  height: 100%;
  width: 90%;
  @media (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 375px;
    width: 95%;
    margin: 0 auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 750ms;
  text-align: center;
`;

const Icon = styled.i`
  font-size: 4em;
  color: #b9402d;
  margin: 0.25em 0;
  @media (max-width: 780px) {
    font-size: 3em;
  }
  @media (max-width: 400px) {
    font-size: 2em;
  }
`;

const StyledRow = styled(Row)`
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    margin: 1em auto;
    text-align: center;
  }
`;

function Item({ title, text, icon }) {
  return (
    <Div>
      <Column width="85%" alignitems="center" textalign="center">
        <Icon className={icon} />
        <Subtitle primary>{title}</Subtitle>
        <Text secondary>{text}</Text>
      </Column>
    </Div>
  );
}

export default function How() {
  const items = [
    {
      title: "1: Pre-Production",
      text:
        "Our core mission is to provide value to your organization--telling your story is the most powerful way in which you can do so.",
      icon: "fas fa-video"
    },
    {
      title: "2: Production",
      text:
        "At Creative114, we utilize the latest technologies and frameworks to ensure superior performance, security, and SEO.",
      icon: "fas fa-code"
    },
    {
      title: "3: Post-Production",
      text:
        "Consistency in branding is vital to your organizations' success--our team of experts create brands that represent your vision.",
      icon: "fas fa-drafting-compass"
    }
  ];
  return (
    <Wrapper>
      <StyledRow>
        <Title>3 steps to share your emotionally engaging stories.</Title>
      </StyledRow>
      <Grid>
        {items.map((key, index) => {
          return (
            <Item
              key={index}
              title={key.title}
              text={key.text}
              icon={key.icon}
            />
          );
        })}
      </Grid>
      <Button primary>Start now</Button>
    </Wrapper>
  );
}
