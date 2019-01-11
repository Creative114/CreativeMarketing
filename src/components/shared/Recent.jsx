import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Title } from "../../theme/index";
import Modal from "../shared/Modal";
import recent1 from "../../assets/recent1.jpg";
import recent2 from "../../assets/recent2.jpg";
import recent3 from "../../assets/recent3.jpg";
import recent4 from "../../assets/recent4.jpg";

const Wrapper = styled.div`
  min-height: 500px;
  width: 85%;
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
  grid-gap: 25px;
  margin: 0 auto;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fit, minmax(263px, 1fr));
  grid-auto-rows: 198px;
  height: 100%;
  width: 100%;
  @media (max-width: 780px) {
    width: 95%;
    margin: 0;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid transparent;
  border-radius: 3px;
  display: flex;
  background: ${props => props.background};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: 750ms;
  text-align: center;
  filter: grayscale(75%);
  &:hover {
    filter: grayscale(0%);
    border: 1.5px solid #b9402d;
  }
`;

function Item({ backgroundImage, handleLightbox }) {
  return (
    <Div
      onClick={() => handleLightbox(0)}
      background={`url('${backgroundImage}')`}
    />
  );
}

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
      "https://gcs-vimeo.akamaized.net/exp=1546110543~acl=%2A%2F956533294.mp4%2A~hmac=9ef6cb106d6429affd6d14dfa080b2ff35aef553731503217230f8134d589df6/vimeo-prod-skyfire-std-us/01/2036/10/260181613/956533294.mp4"
    }
    title={"Title"}
  />,
  <Video title={"Title"} />
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
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
            background={`url('${recent2}')`}
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
