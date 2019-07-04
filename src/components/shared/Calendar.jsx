import React, { Component } from "react";

export default class Calendar extends Component {
  componentWillMount() {
    const script3 = document.createElement("script");

    script3.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script3.async = true;

    document.body.appendChild(script3);
  }
  render() {
    return (
      <div style={{ width: "auto", height: "auto" }}>
        <div
          class="meetings-iframe-container"
          data-src="https://meetings.hubspot.com/jet?embed=true"
        />
      </div>
    );
  }
}
