import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Splash from "../components/splash";
import Posts from "../components/posts";

const IndexPage = () => (
  <Layout type="home">
    <SEO title="Home" />
    <Splash
      title="Insight"
      text="Lorem Ipsum"
      src="https://player.vimeo.com/external/320619144.hd.mp4?s=58bb391b41ba251e391116c5e3d21462f96eba5a&profile_id=169"
    />
    <Posts />
  </Layout>
);

export default IndexPage;
