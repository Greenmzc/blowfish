const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./index.css');
const md5 = require('md5');
const ajax = require('mixins/fetch');
const util = require('common/util');

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  validate() {
    const state = this.state;

    if (!util.emailValidate(state.email)) {
      return false;
    }

    if (!util.passwordValidate(state.password)) {
      return false;
    }

    return true;
  }

  handleBlur(type, event) {
    this.setState({
      [type]: event.target.value
    });
  }

  handleClick() {
    if (!this.validate()) {
      return;
    }

    ajax('/api/signin', {
      method: 'POST',
      headers: undefined,
      body: JSON.stringify({
        email: this.state.email,
        password: md5(this.state.password)
      })
    }).then(data => {
      if (data.isSuccess) {
        location.reload();
      }
    });
  }

  render() {
    return (
      <div>
        <input className={styles.email} placeholder="email" onBlur={this.handleBlur.bind(this, 'email')} />
        <input type="password" className={styles.password} placeholder="password" onBlur={this.handleBlur.bind(this, 'password')} />
        <a href="javascript:void(0)" className={styles.submit} onClick={this.handleClick.bind(this)}>sign in</a>
      </div>
    )
  }
};

ReactDOM.render(
  <Signin />,
  document.getElementById('root')
);
