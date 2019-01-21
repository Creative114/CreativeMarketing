import React from "react";
import Splash from "../../shared/Splash";
import Posts from "../../shared/Posts";
import Footer from "../../shared/Footer";

export default function Impact({ posts }) {
  return (
    <div>
      <Splash type="impact" title="Impact" />
      {/* <Posts posts={posts} /> */}
      {/* <Footer /> */}
    </div>
  );
}
