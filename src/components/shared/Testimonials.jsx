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
  padding: 6em 0 4em 0;
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

export default class Testimonials extends Component {
  state = {
    selected: "videoMarketing"
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
          <Title>Why people love Creative114</Title>
        </StyledColumn>

        {mobile.matches ? (
          <div
            style={{
              margin: "1.5em 0"
            }}
          >
            <Slider {...settings}>
              <Testimonial
                title="Video Marketing"
                description="The Collective Genius is a Mastermind for elite real estate investors making a minimum of 50 deals per year or have a rental portfolio of a least 50 units. CG is comprised of the top 5% of all real estate investors in the Nation. The 120+ members help each other systematize inefficiencies, share inventory sources, and joint venture on real estate deals as well as educational training products. CG hired Creative 114 to produce testimonial videos at their quarterly meetings, create video thumbnails and other graphic design."
                img={testimonial2}
              />

              <Testimonial
                title="Web Deisgn"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                img={testimonial1}
              />

              <Testimonial
                title="Graphic Design"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                img={testimonial1}
              />

              <Testimonial
                title="Photography"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                img={testimonial2}
              />
            </Slider>
          </div>
        ) : (
          <React.Fragment>
            <Row alignitems="center" margin="0 0 0 3em">
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

            <Row>
              {selected === "videoMarketing" && (
                <Testimonial
                  title="Video Marketing"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  img={testimonial2}
                  src={
                    "https://player.vimeo.com/external/289156916.hd.mp4?s=03d0bc51a2d17b988e352eb886a4c9c6193abd5e&profile_id=169"
                  }
                />
              )}

              {selected === "webDesign" && (
                <Testimonial
                  title="Web Design"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  img={testimonial3}
                  src={
                    "https://player.vimeo.com/external/247876645.hd.mp4?s=b50b2731bea4f07781d6f8708cad8cac1aa7c4cb&profile_id=175"
                  }
                />
              )}
              {selected === "graphicDesign" && (
                <Testimonial
                  title="Graphic Design"
                  description="The Collective Genius is a Mastermind for elite real estate investors making a minimum of 50 deals per year or have a rental portfolio of a least 50 units. CG is comprised of the top 5% of all real estate investors in the Nation. The 120+ members help each other systematize inefficiencies, share inventory sources, and joint venture on real estate deals as well as educational training products."
                  img={testimonial1}
                  src={
                    "https://player.vimeo.com/external/296217499.hd.mp4?s=649e2c29d410bab4828c675201e2c00e58c04bde&profile_id=175"
                  }
                />
              )}
              {selected === "photography" && (
                <Testimonial
                  title="Photography"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  img={testimonial4}
                />
              )}
            </Row>
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}
