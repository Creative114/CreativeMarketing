import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

// TYPE

export const Title = styled.h1`
  color: #505d68;
  font-family: 'Montserrat', sans-serif;
  font-size: 42px;
  font-weight: 800;
  line-height: 52px;
  margin: ${(props) => props.margin || '.5em 0'};

  @media (max-width: 780px) {
    font-size: 38px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
  }

  @media (max-width: 300px) {
    font-size: 24px;
  }

  ${(props) =>
    props.header &&
    css`
      color: ${(props) => (props.launch ? '#fff' : '#fff')};
      font-size: ${(props) => props.home && '64px'};
      line-height: ${(props) => props.home && '90px'};
      margin: ${(props) => props.margin || '.25em 0'};
      text-transform: ${(props) => props.home && 'uppercase'};

      @media (max-width: 1200px) {
        font-size: 72px;
        line-height: 90px;
      }

      @media (max-width: 900px) {
        line-height: 80px;
      }

      @media (max-width: 780px) {
        font-size: 48px;
        line-height: 64px;
      }

      @media (max-width: 520px) {
        font-size: 24px;
        line-height: 38px;
      }
    `};
  ${(props) =>
    props.new &&
    css`
      color: #000;
      font-size: 60px;
      line-height: 1.2em;
      margin-top: 0;

      @media (max-width: 1200px) {
        font-size: 48px;
      }

      @media (max-width: 900px) {
        font-size: 38px;
      }
    `};
`;

export const Subtitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #505d68;
  font-size: ${(props) => (props.logo ? '22px' : '21px')};
  line-height: 38px;
  margin: ${(props) => props.margin || '0.5em 0'};

  @media (max-width: 900px) {
    font-size: 21px;
  }

  ${(props) =>
    props.home &&
    css`
      color: #fff;
      font-size: 22px;
      text-transform: uppercase;
      margin: 0;

      @media (max-width: 500px) {
        font-size: 16px;
        display: none;
        line-height: 1em;
      }
    `}
`;

export const SpanTitle = styled.span`
  color: #505d68;
  font-family: 'Montserrat', sans-serif;
  font-size: 42px;
  font-weight: 800;
  line-height: 52px;
  margin: ${(props) => props.margin || '.5em 0'};

  @media (max-width: 780px) {
    font-size: 38px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
  }

  ${(props) =>
    props.header &&
    css`
      color: ${(props) => (props.launch ? '#fff' : '#fff')};
      font-size: ${(props) => props.home && '66px'};
      line-height: ${(props) => props.home && '90px'};
      margin: ${(props) => props.margin || '.25em 0'};
      text-transform: ${(props) => props.home && 'uppercase'};

      @media (max-width: 1200px) {
        font-size: 72px;
        line-height: 90px;
      }

      @media (max-width: 900px) {
        line-height: 80px;
      }

      @media (max-width: 780px) {
        font-size: 48px;
        line-height: 64px;
      }

      @media (max-width: 500px) {
        font-size: 28px;
        line-height: 38px;
      }

      @media (max-width: 300px) {
        font-size: 24px;
        line-height: 38px;
      }
    `};
  ${(props) =>
    props.new &&
    css`
      color: #000;
      font-size: 60px;
      line-height: 1.2em;
      margin-top: 0;

      @media (max-width: 1200px) {
        font-size: 48px;
      }

      @media (max-width: 900px) {
        font-size: 38px;
      }
    `};
`;

export const SpanSubtitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #505d68;
  font-size: ${(props) => (props.logo ? '22px' : '21px')};
  line-height: 38px;
  margin: ${(props) => props.margin || '0.5em 0'};

  @media (max-width: 900px) {
    font-size: 21px;
  }

  ${(props) =>
    props.home &&
    css`
      color: #fff;
      font-size: 28px;
      margin: 0;
      text-transform: uppercase;

      @media (max-width: 500px) {
        display: none;
        font-size: 16px;
        line-height: 1em;
      }
    `}
`;

export const Text = styled.p`
  color: #212121;
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => (props.logo ? '22px' : '18px')};
  font-weight: 100;
  line-height: 34px;
  margin: ${(props) => props.margin || '0.5em 0'};

  @media (max-width: 780px) {
    font-size: 16px;
    line-height: 32px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 26px;
  }

  ${(props) =>
    props.header &&
    css`
      color: #fff;
      font-size: 22px;
    `};

  ${(props) =>
    props.title &&
    css`
      margin: 0;
      font-size: 21px;
    `};

  ${(props) =>
    props.footer &&
    css`
      color: #fff;
      margin: 0;
      line-height: 1.75em;
      font-size: 16px;
    `};

  ${(props) =>
    props.post &&
    css`
      font-size: 14px;
      line-height: 22px;
    `};

  ${(props) =>
    props.dark &&
    css`
      color: #2b2b2b;
      font-weight: 600;
      line-height: 28px;
    `};

  ${(props) =>
    props.contact &&
    css`
      color: ${(props) => (props.home ? '#D21F04' : props.active ? '#D21F04' : '#fff')};
      text-transform: uppercase;
      text-decoration: none;
      margin: 0 1em;
      font-weight: 700;
      font-size: 16px;
      transition: 500ms;
      cursor: pointer;
      line-height: 1em;
      @media (max-width: 780px) {
        margin: 0 0.5em;
        font-size: 14px;
      }
    `};

  ${(props) =>
    props.red &&
    css`
      color: #d21f04;
      font-size: 22px;
      font-weight: 600;
      text-transform: uppercase;
    `}

  ${(props) =>
    props.pointer &&
    css`
      color: #000;
      font-weight: 600;
      margin-top: 0;
    `}
    ${(props) =>
      props.secondary &&
      css`
        line-height: 1.5em;
      `}
      ${(props) =>
        props.white &&
        css`
          color: #fff;
        `}
`;

export const SubTitleText = styled.h6`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: #a1aeb7;
  font-size: ${(props) => (props.logo ? '22px' : '18px')};
  line-height: 34px;
  margin: ${(props) => props.margin || '0.5em 0'};

  @media (max-width: 780px) {
    font-size: 16px;
    line-height: 32px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 26px;
  }

  ${(props) =>
    props.header &&
    css`
      color: #fff;
      font-size: 22px;
    `};

  ${(props) =>
    props.title &&
    css`
      margin: 0;
      font-size: 21px;
    `};

  ${(props) =>
    props.footer &&
    css`
      color: #fff;
      margin: 0;
      line-height: 1.75em;
      font-size: 16px;
    `};

  ${(props) =>
    props.post &&
    css`
      font-size: 14px;
      line-height: 22px;
    `};

  ${(props) =>
    props.dark &&
    css`
      color: #2b2b2b;
      font-weight: 600;
      line-height: 28px;
    `};

  ${(props) =>
    props.contact &&
    css`
      color: ${(props) => (props.home ? '#D21F04' : props.active ? '#D21F04' : '#fff')};
      text-transform: uppercase;
      text-decoration: none;
      margin: 0 1em;
      font-weight: 700;
      font-size: 16px;
      transition: 500ms;
      cursor: pointer;
      line-height: 1em;
      @media (max-width: 780px) {
        margin: 0 0.5em;
        font-size: 14px;
      }
    `};

  ${(props) =>
    props.red &&
    css`
      color: #d21f04;
      font-size: 22px;
      font-weight: 600;
      text-transform: uppercase;
    `}

  ${(props) =>
    props.pointer &&
    css`
      color: #000;
      font-weight: 600;
      margin-top: 0;
    `}

    ${(props) =>
      props.secondary &&
      css`
        line-height: 1.5em;
      `}

      ${(props) =>
        props.white &&
        css`
          color: #fff;
        `}
`;

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => (props.active ? '#D21F04' : '#fff')};
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 1.5em;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  transition: 500ms;
  ${(props) =>
    props.home &&
    css`
      color: #d21f04;
    `};

  @media (max-width: 1200px) {
    margin: 0.5em;
    font-size: 15px;
  }

  @media (max-width: 780px) {
    font-size: 14px;
  }

  @media (max-width: 780px) {
    font-size: 12px;
  }
`;

export const StyledALink = styled.a`
  color: ${(props) => (props.active ? '#D21F04' : '#fff')};
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 1.5em;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  transition: 500ms;
  ${(props) =>
    props.home &&
    css`
      color: #d21f04;
    `};
  @media (max-width: 780px) {
    margin: 0 0.5em;
    font-size: 12px;
  }
  @media (max-width: 560px) {
    margin: 0 0.5em;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  width: 360px;
  height: 41px;
  background-color: #efefef;
  border: 1px solid transparent;
  margin: 0.5em 0;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0 0.25em;
  border-radius: 4px;
  color: #6d6d6d;
  transition: 250ms;

  @media (max-width: 780px) {
    width: 275px;
  }
  &:focus {
    border: 1px solid #546887;
  }
`;

export const Select = styled.select`
  width: 365px;
  height: 41px;
  background-color: #efefef;
  border: 1px solid transparent;
  margin: 0.5em 0;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0 0.25em;
  border-radius: 4px;
  color: #6d6d6d;
  transition: 250ms;
  @media (max-width: 780px) {
    width: 275px;
  }
  &:focus {
    border: 1px solid #546887;
  }
`;

export const TextArea = styled.textarea`
  width: 360px;
  height: 80px;
  background-color: #efefef;
  border: 1px solid transparent;
  margin: 0.5em 0;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0.25em;
  border-radius: 4px;
  color: #6d6d6d;
  transition: 250ms;
  @media (max-width: 780px) {
    width: 275px;
  }
  &:focus {
    border: 1px solid #546887;
  }
`;

export const Label = styled.label`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: #989898;
  font-size: 14px;
  ${(props) =>
    props.login &&
    css`
      font-size: 12px;
      margin: 0.5em 0;
      text-transform: none;
    `};
`;

// CONTAINERS

export const Row = styled.div`
  display: flex;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  align-items: ${(props) => props.alignitems};
  justify-content: ${(props) => props.justifycontent};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  align-items: ${(props) => props.alignitems};
  justify-content: ${(props) => props.justifycontent};
  text-align: ${(props) => props.textalign};
  margin: ${(props) => props.margin};
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const StyledColumn = styled(Column)`
  padding: 2em 0;
  margin: auto;
`;

export const Button = styled.button`
  align-items: center;
  background-color: inherit;
  border-radius: 3px;
  border: 1px solid #505d68;
  color: #505d68;
  cursor: pointer;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  margin: 0.5em 0;
  outline: none;
  text-transform: uppercase;
  transition: 750ms;
  width: 146px;

  ${(props) =>
    props.primary &&
    css`
      background: #d21f04;
      border: 1px solid transparent;
      color: #fff;
      font-size: ${(props) => (props.smallText ? '14px' : '16px')};
      height: 45px;
      margin: ${(props) => props.margin || '.5em 0'}
      width: ${(props) => (props.small ? '155px' : '225px')};

      &:hover {
        background-color: #f32405;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
    `};

  ${(props) =>
    props.footer &&
    css`
      background: #fff;
      border: 1px solid transparent;
      color: #d21f04;
      font-size: ${(props) => (props.smallText ? '14px' : '16px')};
      height: 45px;
      margin: 0;
      width: ${(props) => (props.small ? '135px' : '225px')};

      &:hover {
        color: #d21f04;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
    `};
`;
