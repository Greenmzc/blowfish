const React = require('react');
const baseField = require('./field/index');
const { connect } = require('react-redux');
const { blurField, focusField } = require('./actions/field');
const util = require('common/util');

const mapStateToProps = (state, ownProps) => {
  const field = state.fields.filter(field => field.index == ownProps.index)[0];
  const status = field && field.visited && field.value ? (field.isValid ? 'success': 'warn'): 'default';

  return {
    status: status
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
)(baseField);
