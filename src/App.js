import React from "react";
import Home from "./components/screens/Home/Home";
import Work from "./components/screens/Work/Work";
import About from "./components/screens/About/About";
import CaseStudy from "./components/screens/CaseStudy/CaseStudy";
import Impact from "./components/screens/Impact/Impact";
import Post from "./components/screens/Post/Post";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const App = ({
  data: { casestudypages, casestudyexcerpts, postExcerpts, postPages }
}) => {
  return (
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return <Home onEnter={window.scrollTo(0, 0)} />;
          }}
        />
        <Route
          exact
          path="/about"
          render={() => {
            return <About onEnter={window.scrollTo(0, 0)} />;
          }}
        />
        <Route
          exact
          path="/work"
          render={() => {
            return (
              <Work
                onEnter={window.scrollTo(0, 0)}
                casestudies={casestudyexcerpts}
              />
            );
          }}
        />
        <Route
          exact
          path="/impact"
          render={() => {
            return (
              <Impact onEnter={window.scrollTo(0, 0)} posts={postExcerpts} />
            );
          }}
        />
        {casestudypages &&
          casestudypages.map((key, index) => {
            return (
              <React.Fragment key={index}>
                <Route
                  path={`/casestudies/${key.title.toLowerCase()}`}
                  render={() => (
                    <CaseStudy
                      onEnter={window.scrollTo(0, 0)}
                      title={key.title}
                      mainDescription={key.mainDescription}
                      bannerVideo={
                        key.bannerVideo &&
                        `https://media.graphcms.com/${key.bannerVideo.handle}`
                      }
                    />
                  )}
                />
              </React.Fragment>
            );
          })}
        {postPages &&
          postPages.map((key, index) => {
            return (
              <React.Fragment key={index}>
                <Route
                  path={`/impact/${key.title.toLowerCase()}`}
                  render={() => (
                    <Post
                      onEnter={window.scrollTo(0, 0)}
                      title={key.title}
                      text={key.text}
                      date={key.date}
                      author={key.author}
                      bannerImage={
                        key.bannerImage &&
                        `https://media.graphcms.com/${key.bannerImage.handle}`
                      }
                    />
                  )}
                />
              </React.Fragment>
            );
          })}
      </div>
    </Router>
  );
};

export const casestudypages = gql`
  query {
    casestudypages {
      id
      title
      mainDescription
      bannerVideo {
        width
        handle
        fileName
        height
        id
      }
    }
    casestudyexcerpts {
      id
      title
      type
      description
      bannerImage {
        width
        handle
        fileName
        height
        id
      }
    }
    postExcerpts {
      id
      title
      description
      date
      author
      bannerImage {
        handle
      }
    }
    postPages {
      id
      title
      text
      date
      author
      bannerImage {
        handle
      }
    }
  }
`;

export default graphql(casestudypages, {
  props: ({ data }) => ({
    data
  })
})(App);
