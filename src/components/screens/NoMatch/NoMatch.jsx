import React from 'react';
import Splash from '../../shared/Splash';
import Helmet from 'react-helmet';

const NoMatch = () => {
  return (
    <>
      <Helmet
        title="Thank you | Brand Engagement, Marketing, Design"
        meta={[
          { name: 'description', content: 'Thank you for Creative114' },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:title',
            content: 'Brand Engagement, Marketing, Design',
          },
          { property: 'og:url', content: 'http://creative114.com' },
        ]}
      />
      <Splash type="nomatch" title="Oops" text="Something went wrong. Please try again." />
    </>
  );
};

export default NoMatch;
