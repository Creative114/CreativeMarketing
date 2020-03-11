import React, { Component } from "react";
import styled from "styled-components";
import Member from "./Member";
import { Row, SpanTitle, Text, Column, StyledColumn } from "../../theme/index";
import Slider from "react-slick";
import jet from "../../assets/jet.jpg";
import will from "../../assets/will.jpg";
import jephte from "../../assets/jephte.jpg";
import alex from "../../assets/alex.jpg";
import Rachael from "../../assets/rachel.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const StyledBox = styled.div`
  width: 165px;
  height: 165px;
  border-radius: 100%;
  background: #f1f5f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1.5em;
  background: ${props => props.background};
  background-size: cover;
  background-repeat: no-repeat;
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

const DesktopDiv = styled.div`
  @media (max-width: 920px) {
    margin: 0;
    display: none;
  }
`;

const MobileDiv = styled.div`
  margin: 1.5em 0;
  display: none;
  @media (max-width: 920px) {
    display: block;
  }
`;

const CustomColumn = styled(Column)`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 75%;
  margin: 0 auto;
  @media (max-width: 1100px) {
    margin: 1em auto;
    width: 95%;
  }
`;

const boxes = [
  {
    id: "jet",
    title: "Effective",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-bullseye-arrow",
    img: jet
  },
  {
    id: "Rachael",
    title: "Efficient",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-rabbit-fast",
    img: Rachael
  },
  {
    id: "jephte",
    title: "Evaluations",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-clipboard-list-check",
    img: jephte
  }
  // {
  //   id: "will",
  //   title: "Accountability",
  //   description: "Lorem ipsum dolor sit amet, consectetur",
  //   icon: "fal fa-fingerprint",
  //   img: will
  // },

  // {
  //   id: "alex",
  //   title: "Accountability",
  //   description: "Lorem ipsum dolor sit amet, consectetur",
  //   icon: "fal fa-fingerprint",
  //   img: alex
  // }
];

function Box({ id, selected, handleClick, img }) {
  return (
    <StyledBox
      background={`url('${img}')`}
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
      speed: 1000,
      autoplay: true
    };

    return (
      <Wrapper>
        <CustomColumn>
          <StyledColumn>
            <SpanTitle>Meet the team</SpanTitle>
          </StyledColumn>
          <Text logo margin="0">
            The Creative114 team has a diverse background in different areas
            that allow us to use impeccable resources to convey your story and
            offer out-of-the-box solutions to your problems.
          </Text>
        </CustomColumn>
        <MobileDiv>
          <Slider {...settings}>
            <Member
              img={jet}
              name="Getro Jean-Claude"
              title="Founder & Creative Director"
              description="Without Jet’s vision and servant leadership Creative114 would not be what it is today. He is committed to using his life to impact others. With his keen sense of human connection and his eye for capturing exceptional video content, Jet’s early creative career focused on video and design for nonprofits. After winning awards and gaining national coverage, he was motivated by something greater—the power of telling emotionally engaging stories. He continued to grow as a filmmaker, storyteller, and entrepreneur, eventually launching what is now known as Creative114. He is humbled to lead the team in diverse opportunities to share the unique stories of national and international nonprofits and businesses of all sizes. Jet is dedicated to reflecting the values of determination, creativity, and empowerment in everything he does."
            />

            <Member
              img={Rachael}
              name="Rachael Jean-Claude"
              title="Executive Assistant"
              description="The expression “behind every great man there’s a great woman” is more than a simple adage.  It is the truth behind the leadership of Creative114. Jet and Rachael’s teamwork is important to the success of the company. At the core of Rachael’s work is a powerful question: How can I help foster an environment where creativity can thrive? She is a foundational part of the team, serving our clients and staff with her leadership support, production assistance, and business development. Although she rarely stands in the spotlight, Rachael works behind-the-scenes keeping our Creative114 moving forward."
            />

            <Member
              img={jephte}
              name="Jephte Jean-Claude"
              title="Marketing Intern"
              description="As Jet’s younger brother, Jephte gets the perks of serving as our marketing intern. He doesn’t take that role lightly. With many different experiences to learn from, he works well with others and strives to apply himself in every way. Our clients and staff appreciate his fun-loving, spirited personality. Jephte is determined to grow his leadership, film, marketing, and storytelling skills here. He is already on his way to becoming an integral part of the professional and creative growth of Creative114’s future."
            />

            {/* <Member
              img={will}
              name="William Whatley"
              title="Technologist"
              description="William is the guy you want on your team. He helps give Creative114 our strong digital presence. As a talented website and applications developer, William works behind-the-scenes to diligently create and maintain our online presence. The work he does on our site also helps us better support and promote our clients. He keeps our site updated and create landing pages that are directly related to maximizing the reach of our stories and the Creative114 brand. "
            />

            <Member
              img={alex}
              name="Alex Gell"
              title="Drone Operator"
              description="As a certified drone operator, Alex professionally captures the beautiful shots and footage used in our creative content. Passionate about technology, he has a knack for using technical equipment to deliver the breathtaking visual aspects of our projects."
            /> */}
          </Slider>
        </MobileDiv>
        <DesktopDiv>
          <React.Fragment>
            <Row>
              {selected === "jet" && (
                <Member
                  img={jet}
                  name="Getro Jean-Claude"
                  title="Founder & Creative Director"
                  description="Without Jet’s vision and servant leadership Creative114 would not be what it is today. He is committed to using his life to impact others. With his keen sense of human connection and his eye for capturing exceptional video content, Jet’s early creative career focused on video and design for nonprofits. After winning awards and gaining national coverage, he was motivated by something greater—the power of telling emotionally engaging stories. He continued to grow as a filmmaker, storyteller, and entrepreneur, eventually launching what is now known as Creative114. He is humbled to lead the team in diverse opportunities to share the unique stories of national and international nonprofits and businesses of all sizes. Jet is dedicated to reflecting the values of determination, creativity, and empowerment in everything he does."
                />
              )}
              {selected === "Rachael" && (
                <Member
                  img={Rachael}
                  name="Rachael Jean-Claude"
                  title="Executive Assistant"
                  description="The expression “behind every great man there’s a great woman” is more than a simple adage.  It is the truth behind the leadership of Creative114. Jet and Rachael’s teamwork is important to the success of the company. At the core of Rachael’s work is a powerful question: How can I help foster an environment where creativity can thrive? She is a foundational part of the team, serving our clients and staff with her leadership support, production assistance, and business development. Although she rarely stands in the spotlight, Rachael works behind-the-scenes keeping our Creative114 moving forward."
                />
              )}
              {selected === "jephte" && (
                <Member
                  img={jephte}
                  name="Jephte Jean-Claude"
                  title="Marketing Intern"
                  description="As Jet’s younger brother, Jephte gets the perks of serving as our marketing intern. He doesn’t take that role lightly. With many different experiences to learn from, he works well with others and strives to apply himself in every way. Our clients and staff appreciate his fun-loving, spirited personality. Jephte is determined to grow his leadership, film, marketing, and storytelling skills here. He is already on his way to becoming an integral part of the professional and creative growth of Creative114’s future."
                />
              )}
              {selected === "will" && (
                <Member
                  img={will}
                  name="William Whatley"
                  title="Technologist"
                  description="William is a gifted web and native applications developer. In his capacity, he creates and maintains the aesthetic and web presence of Creative1.14. He also work to develop web and landing pages for our clients in order to maximize the ROI of the amazing stories that we create for them. William deeply cares about the environment and charity work. He has mentored and even served as a judge for public high school programs in Florida, where he taught the fundamentals of programming, product ideation, UI/UX, and entrepreneurship. Unique fact: William loves traveling and spending time in South America. He is quickly learning Spanish and loves entrepreneurship."
                />
              )}

              {selected === "alex" && (
                <Member
                  img={alex}
                  name="Alex Gell"
                  title="Drone Operator"
                  description="As a certified drone operator, Alex professionally captures the beautiful shots and footage used in our creative content. Passionate about technology, he has a knack for using technical equipment to deliver the breathtaking visual aspects of our projects."
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
                      img={key.img}
                    />
                  );
                })}
            </Row>
          </React.Fragment>
        </DesktopDiv>
      </Wrapper>
    );
  }
}
