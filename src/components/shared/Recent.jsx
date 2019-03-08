import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Title } from "../../theme/index";
import Modal from "../shared/Modal";
import recent1 from "../../assets/recent1.jpg";
import recent5 from "../../assets/recent5.jpg";
import recent3 from "../../assets/recent3.jpg";
import recent4 from "../../assets/recent4.jpg";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    padding: 1em 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  margin: 0 auto;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 205px;
  height: 100%;
  width: 95%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 0;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: flex;
  background: ${props => props.background};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: 750ms;
  text-align: center;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.75);
  }
`;

const Video = ({ src, title }) => (
  <iframe
    title={title}
    src={src}
    width="640"
    height="360"
    style={{
      border: 0,
      maxWidth: "97%",
      position: "absolute",
      left: 0,
      right: 0,
      margin: "auto",
      top: "50%",
      transform: "translateY(-50%)"
    }}
  />
);

const lightbox = [
  <Video
    src={
      "https://player.vimeo.com/external/302947248.hd.mp4?s=44c33ee912d83e643cb35784f99aa751f371e52d&profile_id=169"
    }
    title={"Title"}
  />,
  <Video
    src={
      "https://player.vimeo.com/external/302617339.hd.mp4?s=8bfeff0be5ce98ff7f2f6153a3d9cc929434a7a5&profile_id=175"
    }
    title={"Title"}
  />,
  <Video
    src={
      "https://player.vimeo.com/external/260181613.hd.mp4?s=c2602f22c1a1b1724c517c6ef2a70b879f2310a2&profile_id=175"
    }
    title={"Title"}
  />,
  <Video
    title={"Title"}
    src={
      "https://player.vimeo.com/external/310223821.hd.mp4?s=c214e32c3f8e0c025cf86b1e50d311b04ce34d47&profile_id=175"
    }
  />
];

export default class Recent extends Component {
  state = {
    photoIndex: 0,
    isOpen: false
  };

  handleLightbox = index => {
    this.setState({ isOpen: !this.state.isOpen, photoIndex: index });
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <Wrapper id="what">
        <Column alignitems="center" textalign="center">
          <Title>Recent work</Title>
          <Text>
            Below are a few projects that we have had the honor of creating for
            our clients:
          </Text>
        </Column>
        <Grid>
          <Div
            background={`url('${recent3}')`}
            onClick={() => this.handleLightbox(0)}
          />
          <Div
            background={`url('${recent1}')`}
            onClick={() => this.handleLightbox(1)}
          />
          <Div
            background={`url('${recent4}')`}
            onClick={() => this.handleLightbox(2)}
          />
          <Div
            background={`url('${recent5}')`}
            onClick={() => this.handleLightbox(3)}
          />
        </Grid>
        {isOpen && (
          <Modal show={isOpen} togglemodal={this.toggleModal}>
            {lightbox[photoIndex]}
          </Modal>
        )}
      </Wrapper>
    );
  }
}
