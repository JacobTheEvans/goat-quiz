import React from "react";
import {hashHistory} from "react-router";
import FontAwesome from "react-fontawesome";

class ResetButton extends React.Component {
  componentDidMount() {
    document.getElementById("reset-btn").addEventListener("click", () => {
      this.props.action();
      hashHistory.push('/');
    });
  }
  render() {
    return (
      <button id="reset-btn" to={this.props.local} className="button link-button">
        <FontAwesome name="repeat"/> {this.props.additional}
      </button>
    )
  }
}

export default ResetButton;
