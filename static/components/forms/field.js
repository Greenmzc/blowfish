const React = require('react');
const BaseInput = require('./field/index');
const connect = require('react-redux').connect;
const blurField = require('./actions/field').blurField;
const focusField = require('./actions/field').focusField;
const util = require('common/util');

const mapStateToProps = (state, ownProps) => {
  //这样取单个field的值是不是不好
  const field = state.form.filter(field => field.index == ownProps.index)[0];

  return {
    isValid: field ? util.validateMaker(ownProps.label)(field.value): false
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBlur: (e, index) => {
      const value = e.target.value;
      dispatch(blurField(value, index));
    },
    onFocus: (index) => {
      dispatch(focusField(index));
    }
  }
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseInput);
