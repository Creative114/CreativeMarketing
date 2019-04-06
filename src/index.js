import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { ApolloClient } from "apollo-client";
// import { HttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { ApolloProvider } from "react-apollo";

// const GRAPHCMS_API =
//   "https://api-useast.graphcms.com/v1/cjph7nh5a2ssh01g0z1n5wkkl/master";

// const client = new ApolloClient({
//   link: new HttpLink({ uri: GRAPHCMS_API }),
//   cache: new InMemoryCache()
// });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
