const React = require('react');
const styles = require('./index.css');
const classnames = require('classnames');

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBlur(event) {
    this.props.onBlur(event, this.props.index);
  }

  handleFocus() {
    this.props.onFocus(this.props.index);
  }

  render() {
    const { isValid } = this.props;
    const classList = classnames(
      isValid ? styles.success: styles.warn
    );

    return (
      <input {...this.props} className={classList}
        onBlur={this.handleBlur.bind(this)}
        onFocus={this.handleFocus.bind(this)} />
    )
  }
};

module.exports = Input;
