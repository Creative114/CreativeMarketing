import React, { Component } from "react";
import styled from "styled-components";
import Member from "./Member";
import { Row } from "../../theme/index";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4em 0 2em 0;
`;

const StyledBox = styled.div`
  width: 165px;
  height: 138px;
  background: #f1f5f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1.5em;
  border-radius: 3px;
  border: ${props =>
    (props.active && "1.5px solid #b9402d") || "1.5px solid transparent"};
  cursor: pointer;
  transition: 750ms;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const boxes = [
  {
    id: "jet",
    title: "Effective",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-bullseye-arrow"
  },
  {
    id: "jephte",
    title: "Efficient",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-rabbit-fast"
  },
  {
    id: "rachel",
    title: "Evaluations",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-clipboard-list-check"
  },
  {
    id: "will",
    title: "Accountability",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-fingerprint"
  }
];

function Box({ id, selected, handleClick }) {
  return (
    <StyledBox
      id={id}
      onClick={() => handleClick(id)}
      active={id === selected}
    />
  );
}

export default class Team extends Component {
  state = {
    selected: "jet"
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
        {mobile.matches && (
          <div
            style={{
              margin: "1.5em 0"
            }}
          >
            <Slider {...settings}>
              <Member
                name="Getro Jean-Claude"
                title="Founder & Creative Director"
                description="Getro is the mastermind behind Creative 114 and is passionate about creative storytelling. He graduated from the University of Toledo and the Jesup Scott Honors College. He has won the 20 under 40 Leadership Award in Toledo recognizing individuals who have distinguished themselves in the community. He was featured in a few local and national magazine. He truly got his start producing videos professionally with churches and charities with National and International Footprint."
              />

              <Member
                name="Jephte Jean-Claude"
                title="Camera Operator"
                description="Jephte is so much fun to be around. He is the life of the party and always bring a smile to everyone he interacts with."
              />

              <Member
                name="Rachel Jean-Claude"
                title="The Boss"
                description="Rachael is the superpower behind Getro's success. They got married in 2017 and together expecting a beautiful daughter. Rachael is a family Medicine Physician. In her free time, she puts her amazing organizational skills to work."
              />

              <Member
                name="William Whatley"
                title="Technologist"
                description="William has experience developing web and native applications, as well as leading engineering teams for nearly two years. In addition, he currently acts as Chief Technologist for a medical application in partnership with two academic medical doctors. William has mentored and even served as a judge for a county-wide public high school’s program in Florida, where he gave presentations and taught the fundamentals of programming, usability, product ideation, UI/UX, and entrepreneurship.
                "
              />
            </Slider>
          </div>
        )}
        {!mobile.matches && (
          <React.Fragment>
            <Row>
              {selected === "jet" && (
                <Member
                  name="Getro Jean-Claude"
                  title="President"
                  description="Getro is the mastermind behind Creative 114 and is passionate about creative storytelling. He graduated from the University of Toledo and the Jesup Scott Honors College. He has won the 20 under 40 Leadership Award in Toledo recognizing individuals who have distinguished themselves in the community. He was featured in a few local and national magazine. He truly got his start producing videos professionally with churches and charities with National and International Footprint."
                />
              )}
              {selected === "jephte" && (
                <Member
                  name="Jephte Jean-Claude"
                  title="Camera Operator"
                  description="Jephte is so much fun to be around. He is the life of the party and always bring a smile to everyone he interacts with."
                />
              )}
              {selected === "rachel" && (
                <Member
                  name="Rachel Jean-Claude"
                  title="The Boss"
                  description="Rachael is the superpower behind Getro's success. They got married in 2017 and together expecting a beautiful daughter. Rachael is a family Medicine Physician. In her free time, she puts her amazing organizational skills to work."
                />
              )}
              {selected === "will" && (
                <Member
                  name="William Whatley"
                  title="Technologist"
                  description="William has experience developing web and native applications, as well as leading engineering teams for nearly two years. In addition, he currently acts as Chief Technologist for a medical application in partnership with two academic medical doctors. William has mentored and even served as a judge for a county-wide public high school’s program in Florida, where he gave presentations and taught the fundamentals of programming, usability, product ideation, UI/UX, and entrepreneurship.
                  "
                />
              )}
            </Row>

            <Row justifycontent="center" alignitems="center" margin="3em 0 0 0">
              {boxes &&
                boxes.map((key, index) => {
                  return (
                    <Box
                      key={index}
                      id={key.id}
                      title={key.title}
                      description={key.description}
                      icon={key.icon}
                      handleClick={this.handleClick}
                      selected={selected}
                    />
                  );
                })}
            </Row>
          </React.Fragment>
        )}
      </Wrapper>
    );
  }
}
