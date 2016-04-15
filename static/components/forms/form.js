const React = require('react');
const { connect } = require('react-redux');

const mapStateToProps = (state, ownProps) => {
  return {
    isValid: ownProps.children.length == state.fields.length
      && state.fields.every(field => field.isValid == true)
  };
};

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    let fields;

    if (!children || children.length == 0) {
      throw new Error(`at least one Field is needed`);
    } else {
      fields = React.Children.map(children, (child, index) => {
        return React.cloneElement(
          child,
          { index: index }
        );
      });
    }

    return (
      <div>
        {fields}
      </div>
    );
  }
};


module.exports = connect(
  mapStateToProps
)(Form);
