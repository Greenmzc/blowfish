const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const { Form, Field, Submit } = require('components/forms');
const formReducers = require('components/forms/reducers');
const ajax = require('mixins/fetch');
const md5 = require('md5');
const styles = require('./index.css');
let store = createStore(formReducers);

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(formValue) {
    ajax('/api/signup', {
      method: 'POST',
      headers: undefined,
      body: JSON.stringify({
        username: formValue.username,
        password: md5(formValue.password),
        email: formValue.email
      })
    }).then(data => {
      if (data.isSuccess) {
        location.reload();
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Form>
          <Field label="username" name="username" placeholder="Username" />
          <Field label="email" name="email" placeholder="Email Address" />
          <Field label="password" name="password" placeholder="Password" />
          <Submit label ="submit" text="SIGN UP" onClick={this.handleClick.bind(this)} />
        </Form>
      </Provider>
    );
  }
};

ReactDOM.render(
  <Signup />,
  document.getElementById('root')
);
