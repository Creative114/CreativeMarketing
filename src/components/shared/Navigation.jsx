import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";

const Wrapper = styled.div`
  width: 90%;
  height: 115px;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

const Image = styled.img`
  width: 305px;
  height: 40px;
  margin-left: 1.5em;
`;

export default function Navigation() {
  return (
    <Wrapper>
      <Image src={Logo} alt="Creative114 Logo" />
    </Wrapper>
  );
}
