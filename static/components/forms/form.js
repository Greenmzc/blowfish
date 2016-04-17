const React = require('react');
const { connect } = require('react-redux');
const classnames = require('classnames');
const styles = require('./form.css');

const mapStateToProps = (state, ownProps) => {
  return {
    isValid: ownProps.children.filter(child => child.props.label != 'submit').length == state.fields.length
      && state.fields.every(field => field.isValid)
  };
};

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, isValid, className } = this.props;

    if (!children || children.length == 0) {
      throw new Error(`at least one child is needed`);
    }

    if (children.some(child => child.props.label == undefined)) {
      throw new Error(`label is required in every Field`);
    }

    if (children.filter(child => child.props.label == 'submit').length != 1) {
      throw new Error(`one Submit is needed`);
    }

    const fields = React.Children.map(children, (child, index) => {
      const copyProps = child.props.label == 'submit' ? { index, isValid }: { index };

      return React.cloneElement(
        child,
        copyProps
      );
    });

    const classList = classnames(
      className,
      styles.wrapper
    );

    return (
      <div {...this.props} className={classList}>
        {fields}
      </div>
    );
  }
};


module.exports = connect(
  mapStateToProps
)(Form);
