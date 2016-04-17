const React = require('react');
const styles = require('./index.css');
const classnames = require('classnames');

class Field extends React.Component {
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
      props.className,
      styles.basic
    );

    let type;

    switch (props.label) {
      case 'password':
        type = 'password';
        break;
      default:
        type = 'text';
    }

    return (
      <input {...this.props} type={type} className={classList}
        onBlur={this.handleBlur.bind(this)}
        onFocus={this.handleFocus.bind(this)} />
    )
  }
};

module.exports = Field;
