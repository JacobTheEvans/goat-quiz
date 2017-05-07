import React, { PropTypes }  from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

class Wrapper extends React.Component {
  render() {
    let children = React.cloneElement(this.props.children, this.props);
    return (
      <div>
        <Header />
        <div className="content">
         {children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
