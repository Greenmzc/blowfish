const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const { Form, Field } = require('components/forms');
const formReducers = require('components/forms/reducers');
const styles = require('./index.css');

let store = createStore(formReducers);

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Form>
          <Field label="email" />
          <Field label="email" />
        </Form>
      </Provider>
    );
  }
};

ReactDOM.render(
  <Signup />,
  document.getElementById('root')
);
