import React from "react";
import styled from "styled-components";
import { Column, Text, Title, Subtitle } from "../../theme/index";

const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 25px;
  height: 100%;
  margin: 3em auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 325px;
  @media (max-width: 780px) {
    width: 100%;
    grid-auto-rows: 275px;
  }
`;

const Icon = styled.i`
  font-size: 4em;
  margin: 0.5em 0;
  color: #b9402d;
`;

const StyledBox = styled(Column)`
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
`;

const StyledColumn = styled(Column)`
  padding: 6em 0 4em 0;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 780px) {
    padding: 3em 0 1.5em;
  }
`;

const StyledBoxColumn = styled(Column)`
  width: 85%;
  align-items: center;
  @media (max-width: 780px) {
    width: 95%;
  }
`;

const values = [
  {
    icon: "fas fa-handshake-alt",
    title: "Collaboration",
    description:
      "We encourage diversity of thoughts and collaboration to help ideas grows further."
  },
  {
    icon: "fas fa-award",
    title: "Commitment",
    description:
      "We are dedicated to the unrelenting pursuit of your goals and success of your brand."
  },
  {
    icon: "fas fa-heart",
    title: "Compassion",
    description:
      "We bring more meaning to our work by serving and helping others achieve their own dreams."
  },
  {
    icon: "fas fa-badge-check",
    title: "Credibility",
    description:
      "We always do what is right even though it might cost us because trust and integrity is everything to us."
  },
  {
    icon: "fas fa-star",
    title: "Candor",
    description:
      "We believe openness and honesty should be cultivated for the greater good and success of the people that we serve."
  },
  {
    icon: "fas fa-bullseye",
    title: "Consistency",
    description:
      "We go beyond the status quo to consistently exceed your expectation with the quality of our work."
  }
];

function Box({ icon, title, description }) {
  return (
    <StyledBox>
      <Icon className={icon} />
      <StyledBoxColumn>
        <Subtitle primary>{title}</Subtitle>
        <Text>{description}</Text>
      </StyledBoxColumn>
    </StyledBox>
  );
}

export default function Values() {
  return (
    <StyledColumn>
      <Title>Our Values</Title>
      <Wrapper>
        {values &&
          values.map((key, index) => {
            return (
              <Box
                key={index}
                icon={key.icon}
                title={key.title}
                description={key.description}
              />
            );
          })}
      </Wrapper>
    </StyledColumn>
  );
}
