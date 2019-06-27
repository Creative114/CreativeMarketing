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

const StyledWrapper = styled(Column)`
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

const StyledColumn = styled(Column)`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 75%;
  margin: 0 auto;
  @media (max-width: 1100px) {
    margin: 1em auto;
    width: 95%;
  }
`;

const values = [
  {
    icon: "fas fa-handshake",
    title: "Encourage Collaboration",
    description:
      "We combine our talents and resources with your expertise in your industry to engage, entertain, and excite the right people with your unique story."
  },
  {
    icon: "fas fa-award",
    title: "Embrace Commitment",
    description:
      "We never settle for the status quo. We will go to any length possible to exceed your expectations and deliver the highest quality finished product."
  },
  {
    icon: "fas fa-heart",
    title: "Express Compassion",
    description:
      "We are dedicated to loving and serving you. The way we treat people and live our lives is intricately woven into the exceptional work we produce."
  },
  {
    icon: "fas fa-certificate",
    title: "Establish Credibility",
    description:
      "Trust and integrity are critical to our identity as a brand and as individuals. We promise to always do what is right for the client, no matter the circumstances."
  },
  {
    icon: "fas fa-star",
    title: "Emphasize Candor",
    description:
      "Transparency and honesty are ingrained in our people and in our processes. We will always be up front with you and work with your best interest in mind."
  },
  {
    icon: "fas fa-bullseye",
    title: "Enhance Creativity",
    description:
      "We are passionate about our work and we don’t stop until we’ve pushed the boundaries of turning your vision into a breathtaking, exciting reality."
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
    <StyledWrapper>
      <StyledColumn>
        <Title>Our Values</Title>
        <Text logo margin="0">
          The Creative114 team has a diverse background in different areas that
          allow us to use impeccable resources to convey your story and offer
          out-of-the-box solutions to your problems.
        </Text>
      </StyledColumn>
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
    </StyledWrapper>
  );
}
