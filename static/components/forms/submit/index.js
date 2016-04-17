const React = require('react');
const { connect } = require('react-redux');
const styles = require('./index.css');
const classnames = require('classnames');

const mapStateToProps = (state, ownProps) => {
  let formValue = {};
  state.fields.forEach(field => {
    formValue[field.key] = field.value;
  });
  return {
    formValue
  }
};

class Submit extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    const props = this.props;

    if (!props.isValid) {
      return;
    }
    this.props.onClick(this.props.formValue);
  }

  render() {
    const props = this.props;
    const classList = classnames(
      styles.basic
    );

    return (
      <button className={classList} onClick={this.handleClick.bind(this)}>{props.text}</button>
    );
  }
};

module.exports = connect(
  mapStateToProps
)(Submit);
