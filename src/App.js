import React from "react";
import Home from "./components/screens/Home/Home";
import Work from "./components/screens/Work/Work";
import About from "./components/screens/About/About";
import CaseStudy from "./components/screens/CaseStudy/CaseStudy";
import Impact from "./components/screens/Impact/Impact";
// import Post from "./components/screens/Post/Post";
import Contact from "./components/screens/Contact/Contact";
import Thanks from "./components/screens/Thanks/Thanks";
import NoMatch from "./components/screens/NoMatch/NoMatch";
import StartNow from "./components/screens/StartNow/StartNow";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { graphql } from "react-apollo";
// import gql from "graphql-tag";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
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
              return <Work onEnter={window.scrollTo(0, 0)} />;
            }}
          />
          <Route
            exact
            path="/impact"
            render={() => {
              return <Impact onEnter={window.scrollTo(0, 0)} />;
            }}
          />
          <Route
            exact
            path="/casestudies/:name"
            render={() => {
              return <CaseStudy onEnter={window.scrollTo(0, 0)} />;
            }}
          />
          <Route
            exact
            path="/contact"
            render={() => {
              return <Contact onEnter={window.scrollTo(0, 0)} />;
            }}
          />
          <Route
            exact
            path="/thanks"
            render={() => {
              return <Thanks onEnter={window.scrollTo(0, 0)} />;
            }}
          />
          <Route
            exact
            path="/startnow"
            render={() => {
              return <StartNow onEnter={window.scrollTo(0, 0)} />;
            }}
          />
          <Route onEnter={window.scrollTo(0, 0)} component={NoMatch} />
          {/* {postPages &&
            postPages.map((key, index) => {
              return (
                <Route
                  key={index}
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
              );
            })} */}
        </Switch>
      </div>
    </HashRouter>
  );
};

// export const casestudypages = gql`
//   query {
//     postExcerpts {
//       id
//       title
//       description
//       date
//       author
//       bannerImage {
//         handle
//       }
//     }
//     postPages {
//       id
//       title
//       text
//       date
//       author
//       bannerImage {
//         handle
//       }
//     }
//   }
// `;

// export default graphql(casestudypages, {
//   props: ({ data }) => ({
//     data
//   })
// })(App);

export default App;
