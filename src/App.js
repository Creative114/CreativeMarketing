import React from "react";
import Home from "./components/screens/Home/Home";
import Work from "./components/screens/Work/Work";
import About from "./components/screens/About/About";
import CaseStudy from "./components/screens/CaseStudy/CaseStudy";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const App = ({ data: { casestudypages, casestudyexcerpts } }) => {
  if (casestudypages) {
    console.log(casestudypages);

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
        </div>
      </Router>
    );
  } else {
    return null;
  }
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
      description
      bannerImage {
        width
        handle
        fileName
        height
        id
      }
    }
  }
`;

export default graphql(casestudypages, {
  props: ({ data }) => ({
    data
  })
})(App);
