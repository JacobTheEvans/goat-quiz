import React from "react";
import FontAwesome from "react-fontawesome";

class TweetButton extends React.Component {
  render() {
    return (
      <a target="_blank" className="button link-button" href={`https://twitter.com/intent/tweet?text=I%20took%20the%20G.O.A.T%20and%20got%20the%20career%20of%20${this.props.career}.Try%20it%20out%20at%20http://goat-test.io&hashtags=fallout`} data-size="large">
        <FontAwesome name="twitter" /> {this.props.additional}
      </a>
    )
  }
}

export default TweetButton;
