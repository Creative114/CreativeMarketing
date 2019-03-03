import React, { Component } from "react";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import { Title, Row } from "../../theme/index";
import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.jpg";
import testimonial3 from "../../assets/testimonial3.jpg";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3em 0;
  @media (max-width: 780px) {
    text-align: center;
    padding: 3em 0 2em 0;
  }
`;

const StyledButton = styled.button`
  width: 195px;
  height: 45px;
  background: ${props => (props.active ? "#B9402D" : "#f2f5f7")};
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
    selected: "nonProfit",
    playing: false,
    title: "Movement 2819"
  };

  handleClick = (id, client) => {
    this.setState(() => {
      return {
        selected: id,
        title: client
      };
    });
  };

  handlePlay = id => {
    let playing = this.state.playing;
    let el = document.getElementById(`${id}`);
    this.setState({ playing: !this.state.playing }, () => {
      if (playing === true) {
        el.pause();
      } else {
        el.play();
      }
    });
  };
  render() {
    const { selected, title } = this.state;
    let settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 1000
    };

    const mobile = window.matchMedia("(max-width: 780px)");
    return (
      <Wrapper>
        <Row justifycontent="center">
          <Title>Why {title} loves Creative114</Title>
        </Row>

        {mobile.matches && (
          <div
            style={{
              margin: "1.5em 0"
            }}
          >
            <Slider {...settings}>
              <Testimonial
                title="Movement 2819"
                description="Movement 2819 is a non-profit located in Tampa Bay area. Based on Matthew 28:19, their primary purpose is to go and tell the good news of the Gospel. To fulfill their mission, Dustin Lachance had the big vision to preach the Gospel to thousands of people. They invited Tim Tebow, Kari Jobe and many others. The event attracted over 20,000 people. We were hired to produce promotional videos, day of announcements, sponsor video and a recap for the event. We were honored to be part of such a special night."
                img={testimonial2}
                src={
                  "https://player.vimeo.com/external/289156916.hd.mp4?s=03d0bc51a2d17b988e352eb886a4c9c6193abd5e&profile_id=169"
                }
              />

              <Testimonial
                title="Litacore"
                description="Smart Stop Logistics is a startup located in the Tampa Bay area with the mission to improve the quality of life for all ages with technology. The vision of their first product was to create a web-based platform for school district and transportation departments to track buses, find ETA's and give safety of mind to parents. We were hired by Litacore to create a branded video for their launch. However, with the value provided, they also hired us to revamp their marketing website, and to create new photographic assets for their business."
                img={testimonial3}
                src={
                  "https://player.vimeo.com/external/247876645.hd.mp4?s=b50b2731bea4f07781d6f8708cad8cac1aa7c4cb&profile_id=175"
                }
              />

              <Testimonial
                title="The Collective Genius"
                description="The Collective Genius is a Mastermind for elite real estate investors making a minimum of 50 deals per year or have a rental portfolio of a least 50 units. CG is comprised of the top 5% real estate investors in the Nation. The 120+ members help each other systematize inefficiencies, share inventory sources, and create joint venture on deals as well as educational training products. We were hired by CG to film presentations and testimonial videos at their quarterly meetings. We ended up also created graphic design assets for their new website."
                img={testimonial1}
                src={
                  "https://player.vimeo.com/external/296217499.hd.mp4?s=649e2c29d410bab4828c675201e2c00e58c04bde&profile_id=175"
                }
              />
            </Slider>
          </div>
        )}
        {!mobile.matches && (
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
                  title="Movement 2819"
                  description="Movement 2819 is a non-profit located in Tampa Bay area. Based on Matthew 28:19, their primary purpose is to go and tell the good news of the Gospel. To fulfill their mission, Dustin Lachance had the big vision to preach the Gospel to thousands of people. They invited Tim Tebow, Kari Jobe and many others. The event attracted over 20,000 people. We were hired to produce promotional videos, day of announcements, sponsor video and a recap for the event. We were honored to be part of such a special night."
                  img={testimonial2}
                  handlePlay={this.handlePlay}
                  src={
                    "https://player.vimeo.com/external/289156916.hd.mp4?s=03d0bc51a2d17b988e352eb886a4c9c6193abd5e&profile_id=169"
                  }
                />
              )}

              {selected === "startUp" && (
                <Testimonial
                  title="Litacore"
                  description="Smart Stop Logistics is a startup located in the Tampa Bay area with the mission to improve the quality of life for all ages with technology. The vision of their first product was to create a web-based platform for school district and transportation departments to track buses, find ETA's and give safety of mind to parents. We were hired by Litacore to create a branded video for their launch. However, with the value provided, they also hired us to revamp their marketing website, and to create new photographic assets for their business."
                  img={testimonial3}
                  handlePlay={this.handlePlay}
                  src={
                    "https://player.vimeo.com/external/247876645.hd.mp4?s=b50b2731bea4f07781d6f8708cad8cac1aa7c4cb&profile_id=175"
                  }
                />
              )}
              {selected === "business" && (
                <Testimonial
                  title="The Collective Genius"
                  description="The Collective Genius is a Mastermind for elite real estate investors making a minimum of 50 deals per year or have a rental portfolio of a least 50 units. CG is comprised of the top 5% real estate investors in the Nation. The 120+ members help each other systematize inefficiencies, share inventory sources, and create joint venture on deals as well as educational training products. We were hired by CG to film presentations and testimonial videos at their quarterly meetings. We ended up also created graphic design assets for their new website."
                  img={testimonial1}
                  handlePlay={this.handlePlay}
                  src={
                    "https://player.vimeo.com/external/296217499.hd.mp4?s=649e2c29d410bab4828c675201e2c00e58c04bde&profile_id=175"
                  }
                />
              )}
            </Row>
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}
