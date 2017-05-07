import React, {PropTypes} from "react";
import LinkButton from "../components/link-button.js";
import TweetButton from "../components/tweet-button.js";
import ResetButton from "../components/reset-button.js";


class Result extends React.Component {
  componentWillMount() {
    if (this.props.answers.length > 0) {
      this.props.loadResult(this.props.answers);
    }
  }
  render() {
    if (this.props.answers.length > 0) {
      return (
        <div className="result-container">
          <div className="row">
            <div className="seven columns">
              <h4>{this.props.result.title}</h4>
              <h5>Skill: {this.props.result.skill}</h5>
              <p>{this.props.result.desc}</p>
            </div>
            <div className="five columns">
              <div className="btn-result-area">
                <div style={{textAlign: "center"}}>
                  <TweetButton career={this.props.result.title}  additional="Tweet Result"/>
                </div>
                <div style={{textAlign: "center"}}>
                  <ResetButton action={()=> {this.props.resetTest()}} additional="Take Again"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="result-container">
          <h3>No data present for result.</h3>
          <LinkButton local="/" additional="Take It"/>
        </div>
      )
    }
  }
}

export default Result;
