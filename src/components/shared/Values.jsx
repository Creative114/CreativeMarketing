import React from "react";
import styled from "styled-components";
import { Column, Text, SpanTitle, SpanSubtitle, StyledColumn } from "../../theme/index";
import creativity from "../../assets/creativity_icon.svg";
import candor from "../../assets/candor_icon.svg";
import credibility from "../../assets/credibility_icon.svg";
import compassion from "../../assets/compassion_icon.svg";
import commitment from "../../assets/commitment_icon.svg";
import collaboration from "../../assets/collaboration_icon.svg";

const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 25px;
  height: 100%;
  margin: 0em auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 325px;
  @media (max-width: 780px) {
    width: 100%;
    grid-auto-rows: 275px;
  }
`;

const Icon = styled.img`
  width: 72px;
  margin: 0.5em 0;
`;

const StyledBox = styled(Column)`
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
`;

const StyledWrapper = styled(Column)`
  padding: 2em 0 0em 0;
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

const CustomColumn = styled(Column)`
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
    icon: collaboration,
    title: "Encourage Collaboration",
    description:
      "We combine our talents and resources with your expertise in your industry to engage, entertain, and excite the right people with your unique story."
  },
  {
    icon: commitment,
    title: "Embrace Commitment",
    description:
      "We never settle for the status quo. We will go to any length possible to exceed your expectations and deliver the highest quality finished product."
  },
  {
    icon: compassion,
    title: "Express Compassion",
    description:
      "We are dedicated to loving and serving you. The way we treat people and live our lives is intricately woven into the exceptional work we produce."
  },
  {
    icon: credibility,
    title: "Establish Credibility",
    description:
      "Trust and integrity are critical to our identity as a brand and as individuals. We promise to always do what is right for the client, no matter the circumstances."
  },
  {
    icon: candor,
    title: "Emphasize Candor",
    description:
      "Transparency and honesty are ingrained in our people and in our processes. We will always be up front with you and work with your best interest in mind."
  },
  {
    icon: creativity,
    title: "Enhance Creativity",
    description:
      "We are passionate about our work and we don’t stop until we’ve pushed the boundaries of turning your vision into a breathtaking, exciting reality."
  }
];

function Box({ icon, title, description }) {
  return (
    <StyledBox>
      <Icon src={icon} />
      <StyledBoxColumn>
        <SpanSubtitle primary>{title}</SpanSubtitle>
        <Text>{description}</Text>
      </StyledBoxColumn>
    </StyledBox>
  );
}

export default function Values() {
  return (
    <StyledWrapper>
      <CustomColumn>
        <StyledColumn>
          <SpanTitle>Our Values</SpanTitle>
        </StyledColumn>
        <Text logo margin="0">
          The Creative114 team has a diverse background in different areas that
          allow us to use impeccable resources to convey your story and offer
          out-of-the-box solutions to your problems.
        </Text>
      </CustomColumn>
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
