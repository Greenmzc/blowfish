const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./index.css');
const md5 = require('md5');
const ajax = require('mixins/fetch');
const { Provider } = require('react-redux');
const { createStore } = require('redux');
const { Form, Field, Submit } = require('components/forms');
const formReducers = require('components/forms/reducers');
let store = createStore(formReducers);

class Signin extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(formValue) {

    ajax('/api/signin', {
      method: 'POST',
      headers: undefined,
      body: JSON.stringify({
        email: formValue.email,
        password: md5(formValue.password)
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
          <Field label="email" name="email" placeholder="Email Address" />
          <Field label="password" name="password" placeholder="Password" />
          <Submit label ="submit" text="SIGN IN" onClick={this.handleClick.bind(this)} />
        </Form>
      </Provider>
    )
  }
};

ReactDOM.render(
  <Signin />,
  document.getElementById('root')
);
