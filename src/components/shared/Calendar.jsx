import React, { Component } from 'react';

export default class Calendar extends Component {
  componentDidMount() {
    const script3 = document.createElement('script');

    script3.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script3.async = true;

    document.body.appendChild(script3);
  }

  render() {
    return (
      <div
        className="meetings-iframe-container"
        style={{
          width: '700px',
          height: '700px',
          overflow: 'hidden',
        }}
        data-src="https://meetings.hubspot.com/jet?embed=true"
      />
    );
  }
}
