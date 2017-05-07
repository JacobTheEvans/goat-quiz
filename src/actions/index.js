import axios from "axios";
import settings from "../config/settings.js";

export function loadGoat() {
  return function(dispatch) {
    return axios.get(settings.baseUrl).then(function(response) {
      dispatch(successGoat(response.data.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadResult(data) {
  return function(dispatch) {
    return axios.post(settings.baseUrl, {answers: data}).then(function(response) {
      dispatch(successResult(response.data.result));
    }).catch(error => {
      throw(error);
    });
  };
}

export function successGoat(questions) {
  return {type: 'SUCCESS_GOAT', questions: questions};
}

export function successResult(result) {
  return {type: 'SUCCESS_RESULT', result: result};
}

export function setToLoad() {
  return {type: 'SET_TO_LOAD'};
}

export function resetTest() {
  return {type: 'RESET'};

}

export function answer(text) {
  return {type: "ANSWER", answer: text};
}
