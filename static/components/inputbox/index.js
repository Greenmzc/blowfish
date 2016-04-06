const React = require('react');
const styles = require('./index.css');
const classnames = require('classnames');
const util = require('common/util');

class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const classList = classnames(
      styles[props.bfsize],
      styles[props.bfstyle],
      props.className
    );
    return (
      <input {...props} className={classList} />
    );
  }
};

module.exports = InputBox;
