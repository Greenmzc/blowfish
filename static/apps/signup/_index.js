const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./index.css');
const md5 = require('md5');
const ajax = require('mixins/fetch');
const util = require('common/util');
const InputBox = require('components/inputbox');

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

  checkEmail() {
    if (this.state.email == '') {
      return 'default';
    }

    if (!util.emailValidate(this.state.email)) {
        this.showError('邮箱不符合规则');
        return 'warn';
    }

    return 'success';
  }

  checkUsername() {
    if (this.state.username == '') {
      return 'default';
    }

    if (!util.usernameValidate(this.state.username)) {
        this.showError('用户名不符规则');
        return 'warn';
    }

    return 'success';
  }

  checkPassword() {
    if (this.state.password == '') {
      return 'default';
    }

    if (!util.passwordValidate(this.state.password)) {
      this.showError('密码长度要求为[6, 12]');
      return 'warn';
    }

    return 'success';
  }

  handleBlur(type, event) {
    this.setState({
      [type]: event.target.value
    });
  }

  handleClick() {
    if (!(this.checkPassword() == 'success' &&
          this.checkUsername() == 'success' &&
          this.checkEmail() == 'success')) {
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
        <InputBox type="text" className={styles.email} placeholder="email" bfsize="medium" bfstyle={this.checkEmail()} onBlur={this.handleBlur.bind(this, 'email')} />
        <InputBox type="text" placeholder="username" bfsize="medium" bfstyle={this.checkUsername()} onBlur={this.handleBlur.bind(this, 'username')} />
        <InputBox type="password" placeholder="password" bfsize="medium" bfstyle={this.checkPassword()} onBlur={this.handleBlur.bind(this, 'password')} />
        <a href="javascript:void(0)" className={styles.submit} onClick={this.handleClick.bind(this)}>sign up</a>
      </div>
    )
  }
};

ReactDOM.render(
  <Signup />,
  document.getElementById('root')
);
