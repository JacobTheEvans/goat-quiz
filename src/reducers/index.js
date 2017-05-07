const defaultState = {
  isLoading: true,
  index: 0,
  questions: [],
  answers: [],
  result: ""
}

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ANSWER":
      var answers = [
        ...state.answers,
        action.answer
      ]
      return Object.assign({}, state, {
        answers,
        index: state.index + 1
      })
    case "SUCCESS_GOAT":
      return Object.assign({}, state, {
        questions: action.questions,
        isLoading: false
      });
    case "SUCCESS_RESULT":
      return Object.assign({}, state, {
        result: action.result,
        isLoading: false
      });
    case "SET_TO_LOAD":
      return Object.assign({}, state, {isLoading: true});
    case "RESET":
      return Object.assign({}, state, {
        index: 0,
        answers: []
      });
    default:
      return Object.assign({}, state);
  }
}

export default mainReducer;
