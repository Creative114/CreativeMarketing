import React, { Component } from "react";
import styled from "styled-components";
import { Title, Column, Row, Button } from "../../theme/index";
import normal1 from "../../assets/normal1.jpg";
import vertical1 from "../../assets/vertical1.jpg";
import horizontal1 from "../../assets/horizontal1.jpg";
import normal2 from "../../assets/normal2.jpg";
import normal3 from "../../assets/normal3.jpg";
import big1 from "../../assets/big1.jpg";
import normal4 from "../../assets/normal4.jpg";
import normal5 from "../../assets/normal5.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 6em 0 4em 0;
`;

const StyledButton = styled.button`
  width: 195px;
  height: 45px;
  background: ${props => (props.active ? "#B9402D" : "#fff")};
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
    background-color: #d25a47;
    color: #fff;
  }
`;

const Grid = styled.div`
  width: 75%;
  margin: 3em auto;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 198px;
  grid-auto-flow: dense;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #fff;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${props => (props.active ? "grayscale(0%)" : "grayscale(100%)")};
  transition: 500ms;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  }
`;

function Image({ img, id, selected }) {
  console.log(selected);

  return <StyledImage src={img} id={id} active={selected === id} />;
}

function MenuItem({ id, selected, title, handleClick }) {
  return (
    <StyledButton
      id={id}
      onClick={() => handleClick(id)}
      active={id === selected}
    >
      {title}
    </StyledButton>
  );
}

export default class Portfolio extends Component {
  state = {
    selected: "all"
  };

  handleClick = id => {
    this.setState(() => {
      return {
        selected: id
      };
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <Wrapper>
        <Column alignitems="center">
          <Title>Projects</Title>
        </Column>
        <Row justifycontent="center" alignitems="center">
          <MenuItem
            id="all"
            title="All"
            handleClick={this.handleClick}
            selected={selected}
          />
          <MenuItem
            id="videoMarketing"
            title="Video Marketing"
            handleClick={this.handleClick}
            selected={selected}
          />
          <MenuItem
            id="webDesign"
            title="Web Design"
            handleClick={this.handleClick}
            selected={selected}
          />
          <MenuItem
            id="graphicDesign"
            title="Graphic Design"
            handleClick={this.handleClick}
            selected={selected}
          />
          <MenuItem
            id="photography"
            title="Photography"
            handleClick={this.handleClick}
            selected={selected}
          />
        </Row>

        <Grid>
          <Item className="horizontal">
            <Image selected={selected} id="videoMarketing" img={horizontal1} />
          </Item>
          <Item>
            <Image selected={selected} id="webDesign" img={normal1} />
          </Item>
          <Item>
            <Image selected={selected} id="photography" img={normal2} />
          </Item>
          <Item>
            <Image selected={selected} id="webDesign" img={normal3} />
          </Item>
          <Item className="vertical">
            <Image selected={selected} id="photography" img={vertical1} />
          </Item>
          <Item>
            <Image selected={selected} id="graphicDesign" img={normal4} />
          </Item>
          <Item>
            <Image selected={selected} id="webDesign" img={normal5} />
          </Item>

          <Item className="big">
            <Image selected={selected} id="videoMarketing" img={big1} />
          </Item>

          <Item className="horizontal">
            <Image selected={selected} id="videoMarketing" img={horizontal1} />
          </Item>
        </Grid>
        <Column alignitems="center">
          <Button primary>See More</Button>
        </Column>
      </Wrapper>
    );
  }
}
