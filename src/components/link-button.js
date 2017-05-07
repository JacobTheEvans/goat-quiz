import React from "react";
import {Link} from "react-router";

class LinkButton extends React.Component {
  render() {
    return (
      <Link to={this.props.local} className="button link-button">{this.props.additional}</Link>
    )
  }
}

export default LinkButton;
