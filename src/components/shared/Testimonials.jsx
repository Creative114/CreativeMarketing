import React, { Component } from "react";
import styled from "styled-components";
import Testimonial from "./Testimonial";
import { Title, Column, Row } from "../../theme/index";
import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.jpg";
import testimonial3 from "../../assets/testimonial3.jpg";
import testimonial4 from "../../assets/testimonial4.jpg";
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

const StyledColumn = styled(Column)`
  margin: 0 0 0 3em;
  @media (max-width: 780px) {
    margin: 0 auto;
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
    selected: "videoMarketing",
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
        <StyledColumn>
          <Title>Why {title} loves Creative114</Title>
        </StyledColumn>

        {mobile.matches && (
          <div
            style={{
              margin: "1.5em 0"
            }}
          >
            <Slider {...settings}>
              <Testimonial
                title="Movement 2819"
                description="Movement 2819 is a non-profit organization located in Tampa Bay with the simple purpose to fulfil the great commission. Based on Matthew 28:19, their primary purpose is to go out and tell the good news of the Gospel. To fulfill their mission, their founder, Dustin Lachance had the big vision to fill a stadium to preach the Gospel. They invited Tim Tebow, Kari Jobe, Mack Brock, Shannon Estee of Mission City Worship. The event attracted over 20,000 people. We were hired to produce promotional videos, day of announcements, sponsor video and a recap for the event. We were honored to be part of such a special night."
                img={testimonial2}
                src={
                  "https://player.vimeo.com/external/289156916.hd.mp4?s=03d0bc51a2d17b988e352eb886a4c9c6193abd5e&profile_id=169"
                }
              />

              <Testimonial
                title="Litacore"
                description="Smart Stop Logistics is a Software as a Service start up headquatered in Tampa Bay. Their mission is to improve quality of life for all ages and lifestyles by harnessing crowd-source data and content with technology. With the first product, the vision was to create a web based platform that would allow school district and transportation departments to track buses, find ETA's and give safety of mind to parents. We were hired by Litacore to revamp their marketing website, create a branded video and also to create photographic assets for their website and their business. Their original needs was to provide video production, however with the value we were providing, they ended up hiring us for the full package."
                img={testimonial3}
                src={
                  "https://player.vimeo.com/external/247876645.hd.mp4?s=b50b2731bea4f07781d6f8708cad8cac1aa7c4cb&profile_id=175"
                }
              />

              <Testimonial
                title="The Collective Genius"
                description="The Collective Genius is a Mastermind for elite real estate investors making a minimum of 50 deals per year or have a rental portfolio of a least 50 units. CG is comprised of the top 5% of all real estate investors in the Nation. The 120+ members help each other systematize inefficiencies, share inventory sources, and joint venture on real estate deals as well as educational training products."
                img={testimonial1}
                src={
                  "https://player.vimeo.com/external/296217499.hd.mp4?s=649e2c29d410bab4828c675201e2c00e58c04bde&profile_id=175"
                }
              />

              <Testimonial
                title="USF Health"
                description="University of South Florida Health - Morsani College of Medicine is a tampa bay health care provider with the mission to improve the full spectrum of health - from the environment, to the community, to the individual. We were approached by their chief resident and the program director to produce headshots for the PGY1 Interns and the Family Medecine second and third year residents - a total of 32 medical doctors. The purpose of this project was to produce assets for their revamped website. We also capture group pictures of the teaching faculty."
                img={testimonial4}
              />
            </Slider>
          </div>
        )}
        {!mobile.matches && (
          <React.Fragment>
            <Row alignitems="center" margin="0 0 0 3em">
              <MenuItem
                id="videoMarketing"
                client="Movement 2819"
                title="Video Marketing"
                handleClick={this.handleClick}
                selected={selected}
              />
              <MenuItem
                id="webDesign"
                client="Litacore"
                title="Web Design"
                handleClick={this.handleClick}
                selected={selected}
              />
              <MenuItem
                id="graphicDesign"
                client="The Collective Genius"
                title="Graphic Design"
                handleClick={this.handleClick}
                selected={selected}
              />
              <MenuItem
                id="photography"
                client="USF Health"
                title="Photography"
                handleClick={this.handleClick}
                selected={selected}
              />
            </Row>

            <Row>
              {selected === "videoMarketing" && (
                <Testimonial
                  title="Movement 2819"
                  description="Movement 2819 is a non-profit organization located in Tampa Bay with the simple purpose to fulfil the great commission. Based on Matthew 28:19, their primary purpose is to go out and tell the good news of the Gospel. To fulfill their mission, their founder, Dustin Lachance had the big vision to fill a stadium to preach the Gospel. They invited Tim Tebow, Kari Jobe, Mack Brock, Shannon Estee of Mission City Worship. The event attracted over 20,000 people. We were hired to produce promotional videos, day of announcements, sponsor video and a recap for the event. We were honored to be part of such a special night."
                  img={testimonial2}
                  handlePlay={this.handlePlay}
                  src={
                    "https://player.vimeo.com/external/289156916.hd.mp4?s=03d0bc51a2d17b988e352eb886a4c9c6193abd5e&profile_id=169"
                  }
                />
              )}

              {selected === "webDesign" && (
                <Testimonial
                  title="Litacore"
                  description="Smart Stop Logistics is a Software as a Service start up headquatered in Tampa Bay. Their mission is to improve quality of life for all ages and lifestyles by harnessing crowd-source data and content with technology. With the first product, the vision was to create a web based platform that would allow school district and transportation departments to track buses, find ETA's and give safety of mind to parents. We were hired by Litacore to revamp their marketing website, create a branded video and also to create photographic assets for their website and their business. Their original needs was to provide video production, however with the value we were providing, they ended up hiring us for the full package."
                  img={testimonial3}
                  handlePlay={this.handlePlay}
                  src={
                    "https://player.vimeo.com/external/247876645.hd.mp4?s=b50b2731bea4f07781d6f8708cad8cac1aa7c4cb&profile_id=175"
                  }
                />
              )}
              {selected === "graphicDesign" && (
                <Testimonial
                  title="The Collective Genius"
                  description="The Collective Genius is a Mastermind for elite real estate investors making a minimum of 50 deals per year or have a rental portfolio of a least 50 units. CG is comprised of the top 5% of all real estate investors in the Nation. The 120+ members help each other systematize inefficiencies, share inventory sources, and joint venture on real estate deals as well as educational training products."
                  img={testimonial1}
                  handlePlay={this.handlePlay}
                  src={
                    "https://player.vimeo.com/external/296217499.hd.mp4?s=649e2c29d410bab4828c675201e2c00e58c04bde&profile_id=175"
                  }
                />
              )}
              {selected === "photography" && (
                <Testimonial
                  title="USF Health"
                  description="University of South Florida Health - Morsani College of Medicine is a tampa bay health care provider with the mission to improve the full spectrum of health - from the environment, to the community, to the individual. We were approached by their chief resident and the program director to produce headshots for the PGY1 Interns and the Family Medecine second and third year residents - a total of 32 medical doctors. The purpose of this project was to produce assets for their revamped website. We also capture group pictures of the teaching faculty."
                  img={testimonial4}
                  handlePlay={this.handlePlay}
                />
              )}
            </Row>
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}
