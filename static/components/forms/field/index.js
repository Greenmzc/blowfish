const React = require('react');
const styles = require('./index.css');

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
    
    return (
      <input className={isValid? styles.success: styles.warn}
        onBlur={this.handleBlur.bind(this)}
        onFocus={this.handleFocus.bind(this)} />
    )
  }
};

module.exports = Input;
