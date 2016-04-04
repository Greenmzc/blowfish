const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./index.css');
const md5 = require('md5');
const ajax = require('mixins/fetch');
const util = require('common/util');

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: ''
    }
  }

  showError(msg) {
console.log(msg);
  }

  validate() {
    const state = this.state;
    if (!util.emailValidate(state.email)) {
        this.showError('邮箱不符合规则')
        return false;
    }

    if (!util.usernameValidate(state.username)) {
      this.showError('用户名不符合规则');
      return false;
    }

    if (!util.passwordValidate(state.password)) {
      this.showError('密码长度要求为[6, 12]');
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

    ajax('/api/signup', {
      method: 'POST',
      headers: undefined,
      body: JSON.stringify({
        username: this.state.username,
        password: md5(this.state.password),
        email: this.state.email
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
        <input className={styles.name} placeholder="username" onBlur={this.handleBlur.bind(this, 'username')} />
        <input type="password" className={styles.password} onBlur={this.handleBlur.bind(this, 'password')} placeholder="password" />
        <a href="javascript:void(0)" className={styles.submit} onClick={this.handleClick.bind(this)}>sign up</a>
      </div>
    )
  }
};

ReactDOM.render(
  <Signup />,
  document.getElementById('root')
);
