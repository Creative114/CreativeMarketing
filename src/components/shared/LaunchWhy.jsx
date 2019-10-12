import React, { Component } from "react";
import styled from "styled-components";
import { Row, Column, Title, Text } from "../../theme/index";
import action from "../../assets/Action.png";
import audience from "../../assets/Audience.png";
import connecting from "../../assets/Connecting.png";
import BG from "../../assets/rectange_bg.png";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.bg};
  flex-direction: column;
  align-items: center;
  padding: 10em 0 4em 0;
  @media (max-width: 780px) {
    justify-content: center;
    padding: 5em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  margin: 0 auto;
  margin: 2em auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  height: 100%;
  width: 80%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 2em auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: 750ms;
  text-align: center;
`;

const StyledButton = styled.button`
  width: 342px;
  height: 79px;
  outline: none;
  background: #d21f04;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 19px;
  font-weight: 600;
  border-radius: 4px;
  transition: 750ms;
  margin: 0.5em 0;
  text-transform: uppercase;
  box-shadow: 0 5px 30px rgba(148, 151, 155, 0.6);
  &:hover {
    background-color: #f32405;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const StyledColumn = styled(Column)`
  align-items: center;
  width: 70%;
  margin: 3em auto;
  text-align: center;
`;

const Image = styled.img`
  height: 94px;
  margin: 0.75em 0;
`;

export default class LaunchWhy extends Component {
  render() {
    const { isAuthed, toggleModal } = this.props;
    return (
      <Wrapper bg={`url('${BG}')`}>
        <Column alignitems="center" textalign="center">
          <Title margin=".25em 0">If Your Videos Are Boring</Title>
          <Text>If Your Videos Are Boring, they Won’t Get You Results</Text>
        </Column>
        <Grid>
          <Div>
            <Column width="85%" alignitems="center" margin=".75em 0">
              <Image src={audience} />
              <Text dark>"Why aren’t my videos connecting with people?"</Text>
            </Column>
          </Div>
          <Div>
            <Column width="85%" alignitems="center" margin=".75em 0">
              <Image src={connecting} />
              <Text dark>"How can I reach my ideal target audience?"</Text>
            </Column>
          </Div>
          <Div>
            <Column width="85%" alignitems="center" margin=".75em 0">
              <Image src={action} />
              <Text dark>"What encourages or makes people take action?"</Text>
            </Column>
          </Div>
        </Grid>
        <StyledColumn>
          <Text>
            Overcome the obstacles that keep you from connecting with your
            customers. Start supercharging your message with emotionally
            engaging video stories.
          </Text>
        </StyledColumn>
        <Row justifycontent="center">
          <StyledButton
            onClick={
              isAuthed
                ? () => toggleModal("schedule")
                : () => toggleModal("launch")
            }
          >
            {isAuthed ? "Schedule a call now" : "Get the videos"}
          </StyledButton>
        </Row>
      </Wrapper>
    );
  }
}
