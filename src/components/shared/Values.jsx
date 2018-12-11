import React from "react";
import styled from "styled-components";
import { Column, Text, Title } from "../../theme/index";

const Wrapper = styled.div`
  width: 90%;
  display: grid;
  grid-gap: 50px;
  height: 100%;
  margin: 3em auto;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
    icon: "fal fa-user-md",
    title: "Select your speciality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-clipboard-list-check",
    title: "To-do list",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-handshake-alt",
    title: "Collaborate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-tachometer-alt",
    title: "Admin Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-star",
    title: "Request reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  },
  {
    icon: "fal fa-bell",
    title: "Notifications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "
  }
];

function Box({ icon, title, description }) {
  return (
    <StyledBox>
      <Icon className={icon} />
      <StyledBoxColumn>
        <Text large>{title}</Text>
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
