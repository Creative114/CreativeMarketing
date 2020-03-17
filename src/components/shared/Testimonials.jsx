import React, { Component } from "react";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import { SpanTitle, Row, Column, Text } from "../../theme/index";
import Reveal from "react-reveal/Reveal";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em 0;
  @media (max-width: 780px) {
    text-align: center;
    padding: 3em 0 2em 0;
  }
`;

const StyledButton = styled.button`
  width: 195px;
  height: 45px;
  background: ${props => (props.active ? "#D21F04" : "#f2f5f7")};
  color: ${props => (props.active ? "#fff" : "#505d68")};
  display: flex;
  text-transform: uppercase;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  margin: 0 0.75em;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 250ms;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: none;
  &:hover {
    background-color: #f32405;
    color: #fff;
  }
`;

const Div = styled.div`
  display: block;
  margin-top: 2em;
  @media (max-width: 920px) {
    margin-top: 2em;
  }
`;

function MenuItem({ id, selected, title, handleClick, client }) {
  return (
    <StyledButton
      id={id}
      onClick={() => handleClick(id, client)}
      active={id === selected}
    >
      {title}
    </StyledButton>
  );
}

export default class Testimonials extends Component {
  state = {
    selected: "nonProfit"
  };

  handleClick = (id, client) => {
    this.setState(() => {
      return {
        selected: id,
        title: client
      };
    });
  };

  render() {
    const { selected } = this.state;
    const { type } = this.props;

    return (
      <Wrapper>
        <Reveal effect="fadeIn">
          <React.Fragment>
            <Column alignitems="center">
              <SpanTitle>
                {type === "launch"
                  ? "Make An Emotional Impact"
                  : "What they're saying"}
              </SpanTitle>
              {type === "launch" && (
                <React.Fragment>
                  <Text margin="0">
                    Many Business Owners Are Wasting Money Creating Videos That
                    Just Don’t Work.
                  </Text>
                  <br />
                  <Text
                    margin="-1.25em 0 0 0"
                    dark
                    style={{ fontStyle: "italic" }}
                  >
                    I Don’t Want That To Be You!
                  </Text>
                </React.Fragment>
              )}
            </Column>
            <Div>
              <React.Fragment>
                <Row alignitems="center" justifycontent="center">
                  <MenuItem
                    id="nonProfit"
                    client="Movement 2819"
                    title="Non Profit"
                    handleClick={this.handleClick}
                    selected={selected}
                  />
                  <MenuItem
                    id="startUp"
                    client="Litacore"
                    title="Startup"
                    handleClick={this.handleClick}
                    selected={selected}
                  />
                  <MenuItem
                    id="business"
                    client="The Collective Genius"
                    title="Business"
                    handleClick={this.handleClick}
                    selected={selected}
                  />
                </Row>

                <Row>
                  {selected === "nonProfit" && (
                    <Testimonial
                      type="video"
                      src={
                        "https://fast.wistia.com/embed/medias/ubvv0c8re9/swatch"
                      }
                      src2={
                        ""
                      }
                    />
                  )}

                  {selected === "startUp" && (
                    <Testimonial
                      type="video"
                      src={
                        "https://fast.wistia.com/embed/medias/2cxnagybwy/swatch"
                      }
                      src2={
                        ""
                      }
                    />
                  )}
                  {selected === "business" && (
                    <Testimonial
                      type="video"
                      src={
                        "https://fast.wistia.com/embed/medias/dhmx0u7je8/swatch"
                      }
                      src2={
                        ""
                      }
                    />
                  )}
                </Row>
              </React.Fragment>
            </Div>
            {type === "launch" && (
              <Row
                justifycontent="center"
                margin="2.5em 0 0 0"
                style={{ textAlign: "center" }}
              >
                <Text>
                  People Will Respond To Your Videos After You Implement <br />
                  What You Learn Here.
                </Text>
              </Row>
            )}
          </React.Fragment>
        </Reveal>
      </Wrapper>
    );
  }
}
