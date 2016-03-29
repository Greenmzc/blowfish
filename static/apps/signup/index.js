const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./index.css');
const md5 = require('md5');
const ajax = require('mixins/fetch');

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  showError() {

  }

  validate() {
    const state = this.state;
    if (state.username.length < 1) {
      this.showError();
      return false;
    }

    if (state.password.length < 1 || state.password.length > 12) {
      this.showError();
      return false;
    }

    return true;
  }

  handleBlur(type, event) {
    this.setState({
      [type]: event.target.value
    });
  }

  handleClick(event) {
    if (!this.validate()) {
      return;
    }

    ajax('/api/signup', {
      method: 'POST',
      headers: undefined,
      body: JSON.stringify({
        username: this.state.username,
        password: md5(this.state.password)
      })
    }).then(data => {
      if (data.isSuccess) {
        // location.reload();
      }
    });

  }

  render() {
    return (
      <div>
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
