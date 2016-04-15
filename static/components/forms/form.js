const React = require('react');
const connect = require('react-redux').connect;

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    let fields;

    if (!children.length) {

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


module.exports = connect()(Form);
