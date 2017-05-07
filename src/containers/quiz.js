import React, {PropTypes} from "react";
import LinkButton from "../components/link-button.js";
import ResetButton from "../components/reset-button.js";


class Quiz extends React.Component {
  componentWillMount() {
    if (this.props.questions.length <= 0) {
      this.props.loadGoat();
    }
  }
  componentWillUpdate() {
    if (this.props.questions.length != 0 && this.props.questions.length - 1 == this.props.index) {
      this.props.setToLoad();
      this.props.history.push("/result");
    }
  }
  checkIfData() {
    return this.props.questions[this.props.index] != undefined;
  }
  render() {
    if (this.props.isLoading) {
      return (
        <div className="loading">
          <p>Loading Questions...</p>
        </div>
      )
    } else if (this.checkIfData()) {
      let quizData = this.props.questions[this.props.index];
      let answers = quizData.answers.map((item, index) => {
        return (
          <div key={item.text + " key " + index} className="answer-box" onClick={() => this.props.answer(item.value)}>
            <p>{item.text}</p>
          </div>
        )
      });
      return (
        <section className="quiz">
          <div>
            <h3>{quizData.title}</h3>
          </div>
          {answers}
        </section>
      )
    } else {
      return (
        <section className="quiz">
          <div className="reset-area">
            <h3>Error cannot change answer</h3>
            <ResetButton action={()=> {this.props.resetTest();}} additional="Reset"/>
          </div>
        </section>
      )
    }
  }
}

export default Quiz;
