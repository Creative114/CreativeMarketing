import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Column, SpanTitle } from '../../theme/index';
// import Video from '../shared/Video';
import Logos from '../shared/Logos';

// const Wrapper = styled.div`
//   height: 100%;
//   width: 100%;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 2em 0;

//   @media (max-width: 780px) {
//     width: 95%;
//     text-align: center;
//     padding: 1em 0;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-gap: 15px;
//   margin: 2em 0 0 0;
//   // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   grid-template-columns: repeat(3, minmax(300px, 1fr));
//   grid-auto-rows: auto;
//   height: 100%;
//   width: 95%;

//   @media (max-width: 1200px) {
//     display: flex;
//     flex-direction: column;
//     width: 95%;
//   }

//   @media (max-width: 960px) {
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//     width: 95%;
//     margin: 0 auto;
//   }
// `;

// const Div = styled.div`
//   width: 100%;
//   height: 100%;
//   border-radius: 3px;
//   display: flex;
//   background-repeat: no-repeat;
//   background-size: cover;
//   cursor: pointer;
//   transition: 750ms;
//   text-align: center;

//   @media (max-width: 1200px) {
//     margin-top: 1em;

//     &:first-child {
//       margin-top: 0px;
//     }
//   }
// `;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 780px) {
    width: 95%;
    text-align: center;
    padding: 1em 0;
  }

  &:after {
    clear: both;
    display: block;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  // margin: 0 auto;
  margin: 2em auto 0 auto;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  height: 100%;
  width: 95%;

  // @media (max-width: 780px) {
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 95%;
    margin: 0 auto;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: 750ms;
  text-align: center;
`;

const Hr = styled.hr`
  width: 50%;
  margin: 4em auto;
  background-color: rgb(242, 245, 247);
  border: 1px solid rgb(242, 245, 247); ;
`;

const Deliver = ({ toggleModal }) => {
  return (
    <Wrapper id="what">
      <Column alignitems="center" textalign="center" width="100%">
        <SpanTitle>Stories that generate results</SpanTitle>
      </Column>
      <Grid>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/ld06fncegv/swatch" type="videos" /> */}
          {/* <img
            src="https://embed-ssl.wistia.com/deliveries/da9f9244e341d5bb6ca39fbaf53fd0f9.png?"
            onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/ld06fncegv')}
            alt="video"
            style={{ height: '100%', width: '100%' }}
          /> */}
          {/* <span
            className="wistia_embed wistia_async_ld06fncegv popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block', height: '100%', width: '100%' }}
          >
            &nbsp;
          </span> */}

          <span
            className="wistia_embed wistia_async_ld06fncegv popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block' }}
          >
            &nbsp;
          </span>
        </Div>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/jso7sbl54k/swatch" type="open" /> */}
          {/* <img
            src="https://embed-ssl.wistia.com/deliveries/c9a669568afd8540f593d7423b99140f.png?"
            onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/3wz20782od')}
            alt="video"
            style={{ height: '100%', width: '100%' }}
          /> */}
          {/* <span
            className="wistia_embed wistia_async_3wz20782od popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block', height: '100%', width: '100%' }}
          >
            &nbsp;
          </span> */}

          <span
            className="wistia_embed wistia_async_3wz20782od popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block' }}
          >
            &nbsp;
          </span>
        </Div>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/xus7ajjskp/swatch" type="open" /> */}
          {/* <img
            src="https://embed-ssl.wistia.com/deliveries/75dd5e759e8a90dd556c21dbfdc64557.png?"
            onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/xus7ajjskp')}
            alt="video"
            style={{ height: '100%', width: '100%' }}
          /> */}
          {/* <span
            className="wistia_embed wistia_async_xus7ajjskp popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block', height: '100%', width: '100%' }}
          >
            &nbsp;
          </span> */}

          <span
            className="wistia_embed wistia_async_xus7ajjskp popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block' }}
          >
            &nbsp;
          </span>
        </Div>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/3f3146tcv5/swatch" type="open" /> */}
          {/* <img
            src="https://embed-ssl.wistia.com/deliveries/417ba2bcffcb71c43b6ee370af061f4a.png?"
            onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/3f3146tcv5')}
            alt="video"
            style={{ height: '100%', width: '100%' }}
          /> */}
          {/* <span
            className="wistia_embed wistia_async_3f3146tcv5 popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block', height: '100%', width: '100%' }}
          >
            &nbsp;
          </span> */}

          <span
            className="wistia_embed wistia_async_3f3146tcv5 popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block' }}
          >
            &nbsp;
          </span>
        </Div>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/p20j70i0qu/swatch" type="open" /> */}
          {/* <img
            src="https://embed-ssl.wistia.com/deliveries/8b44e110fb44f1b37c33967b44cbfeaf.png"
            onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/p20j70i0qu')}
            alt="video"
            style={{ height: '100%', width: '100%' }}
          /> */}
          {/* <span
            className="wistia_embed wistia_async_p20j70i0qu popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block', height: '100%', width: '100%' }}
          >
            &nbsp;
          </span> */}

          <span
            className="wistia_embed wistia_async_p20j70i0qu popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block' }}
          >
            &nbsp;
          </span>
        </Div>
        <Div>
          {/* <Video src="https://fast.wistia.com/embed/medias/1s0g2445aj/swatch" type="open" /> */}
          {/* <img
            src="https://embed-ssl.wistia.com/deliveries/01a8af54445b55ed0e0644596f254742.png?"
            onClick={() => toggleModal('videos', 'https://fast.wistia.net/embed/iframe/1s0g2445aj')}
            alt="video"
            style={{ height: '100%', width: '100%' }}
          /> */}
          {/* <span
            className="wistia_embed wistia_async_1s0g2445aj popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block', height: '100%', width: '100%' }}
          >
            &nbsp;
          </span> */}

          <span
            className="wistia_embed wistia_async_1s0g2445aj popoverDisableAutoPlay=true popover=true popoverAnimateThumbnail=true popoverOverlayOpacity=0.5 videoFoam=true"
            style={{ display: 'inline-block' }}
          >
            &nbsp;
          </span>
        </Div>
      </Grid>
      <Hr />
      <Logos />
    </Wrapper>
  );
};

Deliver.propTypes = {
  toggleModal: PropTypes.func,
};

export default Deliver;
