import React from "react";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Provider} from 'react-redux';
import WrapperWithData from "../containers/wrapper.js";
import About from "../containers/about.js";
import Quiz from "../containers/quiz.js";
import Result from "../containers/result.js";


const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={WrapperWithData}>
        <IndexRoute component={About}/>
        <Route path="/quiz" component={Quiz} />
        <Route path="/result" component={Result} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
