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
    const props = this.props;
    const { isValid } = props;
    const classList = classnames(
      styles[props.status],
      props.className
    );

    return (
      <input {...this.props} className={classList}
        onBlur={this.handleBlur.bind(this)}
        onFocus={this.handleFocus.bind(this)} />
    )
  }
};

module.exports = Input;
