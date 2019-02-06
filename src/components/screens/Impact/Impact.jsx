import React from "react";
import Splash from "../../shared/Splash";
// import Posts from "../../shared/Posts";
// import Footer from "../../shared/Footer";
import Helmet from "react-helmet";

export default function Impact({ posts }) {
  return (
    <div>
      <Helmet
        title="Our Impact | Brand Engagement, Marketing, Design"
        meta={[
          { name: "description", content: "Impact Page for Creative114" },
          { property: "og:type", content: "website" },
          {
            property: "og:title",
            content: "Brand Engagement, Marketing, Design"
          },
          { property: "og:url", content: "http://creative114.com" }
        ]}
      />
      <Splash type="impact" title="Impact" />
      {/* <Posts posts={posts} /> */}
      {/* <Footer /> */}
    </div>
  );
}
