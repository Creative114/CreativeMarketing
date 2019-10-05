import React from "react";
import styled from "styled-components";
import { Title, Text, Button, Column } from "../../theme";
import ShareForm from "./ShareForm";
import BG from "../../assets/rectange_bg.png";
import launchimg from "../../assets/launch_img.png";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.bg};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10em 0 4em 0;
  @media (max-width: 780px) {
    justify-content: center;
    padding: 5em 0;
  }
`;

const Image = styled.img`
  width: 400px;
`;

export default function Share() {
  return (
    <Wrapper bg={`url('${BG}')`}>
      <ShareForm />
      <Image src={launchimg} />
    </Wrapper>
  );
}
