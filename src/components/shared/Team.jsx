import React, { Component } from "react";
import styled from "styled-components";
import Member from "./Member";
import { Row, Title } from "../../theme/index";
import Slider from "react-slick";
import jet from "../../assets/jet.jpg";
import will from "../../assets/will.jpg";
import jephte from "../../assets/jephte.jpg";
import alex from "../../assets/alex.jpg";
import sasha from "../../assets/sasha.jpg";
import Rachael from "../../assets/rachel.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 4em 0 2em 0;
`;

const StyledBox = styled.div`
  width: 165px;
  height: 165px;
  background: #f1f5f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1.5em;
  border-radius: 3px;
  background: ${props => props.background};
  background-size: contain;
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
  },
  {
    id: "will",
    title: "Accountability",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-fingerprint",
    img: will
  },
  {
    id: "sasha",
    title: "Accountability",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-fingerprint",
    img: sasha
  },
  {
    id: "alex",
    title: "Accountability",
    description: "Lorem ipsum dolor sit amet, consectetur",
    icon: "fal fa-fingerprint",
    img: alex
  }
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
      speed: 1000
    };

    const mobile = window.matchMedia("(max-width: 780px)");
    return (
      <Wrapper>
        <Row justifycontent="center">
          <Title>Meet the team</Title>
        </Row>
        {mobile.matches && (
          <div
            style={{
              margin: "1.5em 0"
            }}
          >
            <Slider {...settings}>
              <Member
                img={jet}
                name="Getro Jean-Claude"
                title="Founder & Creative Director"
                description="Getro is the mastermind behind Creative1.14. He is very passionate about creative storytelling and problem solving. When Getro is not working hard to tell the emotional impact of the good that you do - he is gaining inspiration by watching all of the Marvel’s (and sometime DC’s) movies and shows. Getro loves learning about different cultures, food and languages. He is fluent in Creole and has strong command of French and Spanish. He even took 3 semesters of Mandarin Chinese in College.  Fun Fact: He is originally from Haiti, has won a 20 under 40 Leadership Award, nominated as Next Mayor of Toledo and was featured in a few local and national magazine."
              />

              <Member
                img={Rachael}
                name="Rachael Jean-Claude"
                title="The Founder’s Boss"
                description="Behind any great man, there is an amazing women. She is the founder’s (Getro) wife. With her day job - she saves lives as a family medicine physicians. However, she loves working with her husband as an assistant behind the scene photographer/videographer when the time allows. She also handles some of the internal operations of Creative1.14. She plays a huge role as a soundboard for the strategic growth of the organization. Fun Fact: Getro and Rachael are expecting their first child - a daughter - Marielle (Ellie) in June 2019. "
              />

              <Member
                img={jephte}
                name="Jephte Jean-Claude"
                title="Marketing Intern"
                description="Jephte is the younger and better looking brother of the Founder (Getro). He is currently in College studying Marketing and will be graduating in December 2019. He hopes to join his brother’s business after graduation. He is currently a track and field star and even played football as a wide receiver and kicker in his first couple years in College. Jephte is a drummer, loves to dance and is the life of the party. He always bring a smile to everyone that he interacts with. Fun Fact: He is a 5 times MIAA Triple Jump Champions."
              />

              <Member
                img={will}
                name="William Whatley"
                title="Technologist"
                description="William has experience developing web and native applications, as well as leading engineering teams. In addition, he currently acts as Chief Technologist for a medical application in partnership with two academic physicians. William has mentored and even served as a judge for a county-wide public high school’s program in Florida, where he gave presentations and taught the fundamentals of programming, usability, product ideation, UI/UX, and entrepreneurship."
              />
              <Member
                img={sasha}
                name="Sasha Lorow"
                title="Social Media Strategist"
                description="Sasha is a graduate from the University of Tampa with a Degree in Digital Arts. In her role with Creative1.14, she creates and executes our social media strategy and campaigns. She also monitors and engage with our social media audience. As her passion, Sasha has always been drawn to anything remotely creative. She currently volunteers at her church as a camera operator on the production team. Fun Fact: She is originally from South Carolina. She loves music and uses it as her muse for her life and inspiration. She hopes to become a pro at playing the guitar one day."
              />
              <Member
                img={alex}
                name="Alex Gell"
                title="Drone Operator"
                description="Alex is a certified Part 107 drone pilot and currently captures all of our amazing drone footage for our creative stories. He is very passionate about technology and video production. He currently volunteers as the Director of Production at Mission City Church. He prides himself in continually growing as a husband/father, providing great customer service and problem solving. Alex is married, has a 3 year old, Emilia and a second child on the way with his wife Niki. Fun Fact: Alex was born in Puerto Rico and speak fluent Spanish."
              />
            </Slider>
          </div>
        )}
        {!mobile.matches && (
          <React.Fragment>
            <Row>
              {selected === "jet" && (
                <Member
                  img={jet}
                  name="Getro Jean-Claude"
                  title="Founder & Creative Director"
                  description="Getro is the mastermind behind Creative1.14. He is very passionate about creative storytelling and problem solving. When Getro is not working hard to tell the emotional impact of the good that you do - he is gaining inspiration by watching all of the Marvel’s (and sometime DC’s) movies and shows. Getro loves learning about different cultures, food and languages. He is fluent in Creole and has strong command of French and Spanish. He even took 3 semesters of Mandarin Chinese in College.  Fun Fact: He is originally from Haiti, has won a 20 under 40 Leadership Award, nominated as Next Mayor of Toledo and was featured in a few local and national magazine."
                />
              )}
              {selected === "Rachael" && (
                <Member
                  img={Rachael}
                  name="Rachael Jean-Claude"
                  title="The Founder’s Boss"
                  description="Behind any great man, there is an amazing women. She is the founder’s (Getro) wife. With her day job - she saves lives as a family medicine physicians. However, she loves working with her husband as an assistant behind the scene photographer/videographer when the time allows. She also handles some of the internal operations of Creative1.14. She plays a huge role as a soundboard for the strategic growth of the organization. Fun Fact: Getro and Rachael are expecting their first child - a daughter - Marielle (Ellie) in June 2019. "
                />
              )}
              {selected === "jephte" && (
                <Member
                  img={jephte}
                  name="Jephte Jean-Claude"
                  title="Marketing Intern"
                  description="Jephte is the younger and better looking brother of the Founder (Getro). He is currently in College studying Marketing and will be graduating in December 2019. He hopes to join his brother’s business after graduation. He is currently a track and field star and even played football as a wide receiver and kicker in his first couple years in College. Jephte is a drummer, loves to dance and is the life of the party. He always bring a smile to everyone that he interacts with. Fun Fact: He is a 5 times MIAA Triple Jump Champions."
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
              {selected === "sasha" && (
                <Member
                  img={sasha}
                  name="Sasha Lorow"
                  title="Social Media Strategist"
                  description="Sasha is a graduate from the University of Tampa with a Degree in Digital Arts. In her role with Creative1.14, she creates and executes our social media strategy and campaigns. She also monitors and engage with our social media audience. As her passion, Sasha has always been drawn to anything remotely creative. She currently volunteers at her church as a camera operator on the production team. Fun Fact: She is originally from South Carolina. She loves music and uses it as her muse for her life and inspiration. She hopes to become a pro at playing the guitar one day."
                />
              )}
              {selected === "alex" && (
                <Member
                  img={alex}
                  name="Alex Gell"
                  title="Drone Operator"
                  description="Alex is a certified Part 107 drone pilot and currently captures all of our amazing drone footage for our creative stories. He is very passionate about technology and video production. He currently volunteers as the Director of Production at Mission City Church. He prides himself in continually growing as a husband/father, providing great customer service and problem solving. Alex is married, has a 3 year old, Emilia and a second child on the way with his wife Niki. Fun Fact: Alex was born in Puerto Rico and speak fluent Spanish."
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
        )}
      </Wrapper>
    );
  }
}
