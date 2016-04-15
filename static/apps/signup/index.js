const React = require('react');
const ReactDOM = require('react-dom');
const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const Form = require('components/forms').Form;
const Field = require('components/forms').Field;
const formReducers = require('components/forms/reducers');

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
