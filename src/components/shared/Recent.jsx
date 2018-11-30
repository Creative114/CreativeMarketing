import React from "react";
import styled from "styled-components";
import { Column, Text, Title } from "../../theme/index";

const Wrapper = styled.div`
  min-height: 500px;
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
  @media (max-width: 780px) {
    width: 95%;
    padding: 1em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  margin: 0 auto;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(263px, 1fr));
  grid-auto-rows: 198px;
  height: 100%;
  width: 100%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 0;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid #a1aeb7;
  border-radius: 3px;
  display: flex;
  background: #f2f5f7;
  cursor: pointer;
  transition: 750ms;
  text-align: center;
  &:hover {
    background: #fff;
    border: 1.5px solid #b9402d;
  }
`;

function Item({ title, text }) {
  return <Div />;
}

export default function Recent() {
  const items = [
    {
      title: "Video Marketing",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "fas fa-video"
    },
    {
      title: "Web Design",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "fas fa-code"
    },
    {
      title: "Graphic Design",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "fas fa-drafting-compass"
    },
    {
      title: "Photography",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      icon: "fas fa-camera-alt"
    }
  ];
  return (
    <Wrapper id="what">
      <Column alignitems="center" textalign="center">
        <Title>Recent work</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor.
        </Text>
      </Column>
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
    </Wrapper>
  );
}
