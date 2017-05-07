import { connect } from 'react-redux';
import * as actionCreators from "../actions/";
import Wrapper from "./wrapper-component.js";
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const WrapperWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper)

export default WrapperWithData;
