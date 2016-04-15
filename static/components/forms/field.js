const React = require('react');
const BaseInput = require('./field/index');
const connect = require('react-redux').connect;
const { blurField, focusField } = require('./actions/field');
const util = require('common/util');

const mapStateToProps = (state, ownProps) => {
  //这样取单个field的值是不是不好
  const field = state.fields.filter(field => field.index == ownProps.index)[0];
  return {
    isValid: field ? field.isValid: false
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBlur: (e, index) => {
      const value = e.target.value;
      const isValid = util.validateMaker(ownProps.label)(value);

      dispatch(blurField(index, value, isValid));
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
