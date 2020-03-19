import React from "react";
import styled from "styled-components";
import ShareForm from "./ShareForm";
import BG from "../../assets/rectange_bg.png";
import launchimg from "../../assets/launch_img.png";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.bg};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 10em 0 4em 0;
  @media (max-width: 780px) {
    justify-content: center;
    padding: 5em 0;
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 400px;
  @media (max-width: 500px) {
    width: 325px;
    margin-top: 2em;
  }
`;

export default function Share({handleAuth, handleSubmitFormVisible, submitFormVisible}) {
  return (
    <Wrapper bg={`url('${BG}')`}>
      <ShareForm
        handleAuth={handleAuth}
        handleSubmitFormVisible={handleSubmitFormVisible}
        submitFormVisible={submitFormVisible}
      />
      <Image src={launchimg} />
    </Wrapper>
  );
}
