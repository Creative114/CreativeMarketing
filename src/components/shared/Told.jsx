import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Row, Button, Title } from "../../theme/index";
import { Link } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(242, 245, 247);
  justify-content: center;
  padding: 3em 0;
  @media (min-width: 1750px) {
    min-height: 1000px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 3em 0 1.5em 0;
    text-align: center;
  }
`;

const StyledTextColumn = styled(Column)`
  width: 40%;
  margin-left: 4em;
  @media (max-width: 980px) {
    width: 95%;
    align-items: center;
    margin: 1em auto;
  }
`;

const StyledRow = styled(Row)`
  padding: 2.5em 0;
  justify-content: center;
  width: 90%;
  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    width: 95%;
    margin: 0 auto;
  }
`;

const StyledColumn = styled(Column)`
  text-align: right;
  align-items: flex-end;
  width: 35%;
  @media (max-width: 980px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 95%;
    margin: 0 auto;
  }
`;

export default class Told extends Component {
  render() {
    return (
      <Wrapper>
        <Reveal effect="fadeIn">
          <StyledRow>
            <StyledColumn>
              <Title new>
                Your <span style={{ color: "#d21f04" }}>story</span> deserves to
                be heard
              </Title>
              <Button primary>
                <Link to="/work">Schedule a call now</Link>
              </Button>
            </StyledColumn>
            <StyledTextColumn>
              <Text secondary>
                Telling engaging video stories is the best way for your business
                to stay relevant and relatable.
              </Text>
              <Text pointer>
                Your story deserves to be{" "}
                <span style={{ color: "#d21f04" }}>TOLD.</span>
              </Text>
              <div
                style={{ width: "26px", height: "6px", background: "#d21f04" }}
              />
              <Text secondary>
                Sharing emotional video stories will connect you with people
                unlike any other marketing tool.
              </Text>
              <Text pointer>
                Your story deserves to{" "}
                <span style={{ color: "#d21f04" }}>CONNECT.</span>
              </Text>
              <div
                style={{ width: "26px", height: "6px", background: "#d21f04" }}
              />
              <Text secondary>
                Expressing emotions through video storytelling will get you
                results and transform your audience.
              </Text>
              <Text pointer>
                Your story deserves to get{" "}
                <span style={{ color: "#d21f04" }}>RESULTS.</span>
              </Text>
            </StyledTextColumn>
          </StyledRow>
        </Reveal>
      </Wrapper>
    );
  }
}
