import React, { Component } from "react";
import styled from "styled-components";
import { Title, Column, Row, Button } from "../../theme/index";
import port1 from "../../assets/port1.jpg";
import port2 from "../../assets/port2.jpg";
import port3 from "../../assets/port3.jpg";
import port4 from "../../assets/port4.jpg";
import port5 from "../../assets/port5.jpg";
import port6 from "../../assets/port6.jpg";
import port7 from "../../assets/port7.jpg";
import port8 from "../../assets/port8.jpg";
import port9 from "../../assets/port9.jpg";
import Modal from "../shared/Modal";
import {
  VideoNightToShine,
  VideoTimTebow,
  VideoPremierPaint,
  VideoStopBeingAverage,
  VideoTimBratz,
  VideoHireHumanly,
  VideoLitaCore,
  VideoTBSW,
  VideoEDental
} from "../shared/Videos/Videos";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3em 0;
  background: rgb(242, 245, 247);
`;

const StyledButton = styled.button`
  width: 195px;
  height: 45px;
  background: ${props => (props.active ? "#D21F04" : "#fff")};
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
  @media (max-width: 780px) {
    font-size: 14px;
    width: 150px;
    height: 38px;
    margin: 0.75em;
  }
`;

const StyledRow = styled(Row)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 0 auto;
`;

const Grid = styled.div`
  min-width: 1200px;
  max-width: 1200px;
  margin: 3em auto;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 160px;
  grid-auto-flow: dense;
  @media (min-width: 2500px) {
    min-width: 2500px;
    max-width: 2500px;
    grid-auto-rows: 355px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  @media (min-width: 2000px) {
    min-width: 2000px;
    max-width: 2000px;
    grid-auto-rows: 325px;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  }
  @media (min-width: 1750px) {
    min-width: 1750px;
    max-width: 1750px;
    grid-auto-rows: 280px;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  }
  @media (max-width: 1300px) {
    width: 95%;
    min-width: 95%;
    max-width: 95%;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100%;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${props => (props.active ? "blur(0px)" : "blur(4px)")};
  transition: 750ms;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  }
`;

const Img = styled.img`
  max-width: 97%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
`;

const lightbox = [
  <VideoStopBeingAverage />,
  <VideoTBSW />,
  <VideoNightToShine />,
  <VideoEDental />,
  <VideoLitaCore />,
  <VideoHireHumanly />,
  <VideoPremierPaint />,
  <VideoTimBratz />,
  <VideoTimTebow />
];

function Image({ img, cid, selected }) {
  return <StyledImage src={img} id={cid} active={cid.includes(selected)} />;
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
    selected: "all",
    photoIndex: 0,
    isOpen: false
  };

  handleClick = id => {
    this.setState(() => {
      return {
        selected: id
      };
    });
  };

  handleLightbox = index => {
    this.setState({ isOpen: !this.state.isOpen, photoIndex: index });
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { selected, photoIndex, isOpen } = this.state;
    const { type, navigate } = this.props;

    const mobile = window.matchMedia("(max-width: 780px)");
    return (
      <Wrapper>
        <Column alignitems="center">
          <Title>Projects</Title>
        </Column>
        <StyledRow>
          <MenuItem
            id="all"
            title="All"
            handleClick={this.handleClick}
            selected={selected}
          />
          <MenuItem
            id="startUps"
            title="Startups"
            handleClick={this.handleClick}
            selected={selected}
          />
          <MenuItem
            id="nonProfits"
            title="nonProfits"
            handleClick={this.handleClick}
            selected={selected}
          />
          <MenuItem
            id="smallBusinesses"
            title="Small Businesses"
            handleClick={this.handleClick}
            selected={selected}
          />

          <MenuItem
            id="largeBusinesses"
            title="Large Businesses"
            handleClick={this.handleClick}
            selected={selected}
          />
        </StyledRow>

        <Grid>
          <Item
            onClick={() => this.handleLightbox(0)}
            className={mobile ? "horizontal" : ""}
          >
            <Image selected={selected} cid={["startUps", "all"]} img={port2} />
          </Item>
          <Item onClick={() => this.handleLightbox(1)}>
            <Image
              selected={selected}
              cid={["smallBusinesses", "all"]}
              img={port6}
            />
          </Item>
          <Item onClick={() => this.handleLightbox(2)}>
            <Image
              selected={selected}
              cid={["nonProfits", "all"]}
              img={port8}
            />
          </Item>
          <Item onClick={() => this.handleLightbox(3)}>
            <Image
              selected={selected}
              cid={["smallBusinesses", "all"]}
              img={port7}
            />
          </Item>
          <Item
            className={mobile ? "vertical" : ""}
            onClick={() => this.handleLightbox(4)}
          >
            >
            <Image
              selected={selected}
              img={port9}
              cid={["largeBusinesses", "all"]}
            />
          </Item>
          <Item onClick={() => this.handleLightbox(5)}>
            <Image
              selected={selected}
              cid={["largeBusinesses", "all"]}
              img={port5}
            />
          </Item>
          <Item onClick={() => this.handleLightbox(6)}>
            <Image
              selected={selected}
              cid={["largeBusinesses", "all"]}
              img={port4}
            />
          </Item>

          <Item
            className={mobile ? "big" : ""}
            onClick={() => this.handleLightbox(8)}
          >
            <Image selected={selected} cid={["startUps", "all"]} img={port1} />
          </Item>

          <Item
            className={mobile ? "horizontal" : ""}
            onClick={() => this.handleLightbox(7)}
          >
            <Image selected={selected} cid={["startUps", "all"]} img={port3} />
          </Item>
        </Grid>
        {type === "home" && (
          <Column alignitems="center">
            <Button primary onClick={() => navigate.push("Work")}>
              See More
            </Button>
          </Column>
        )}
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {lightbox[photoIndex]}
          </Modal>
        )}
      </Wrapper>
    );
  }
}
