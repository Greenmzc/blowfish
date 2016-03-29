const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./index.css');
const ajax = require('mixins/fetch');

class Admin extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    event.preventDefault();

    ajax('/api/signout', {
      method: 'POST',
      credentials: 'same-origin'
    })
    .then(data => {
      if (data.isSuccess) {
        location.reload();
      }
    })
  }

  render() {
    return (
      <div>
        <a href="javascript:;" onClick={this.handleClick.bind(this)}>退出</a>
      </div>
    )
  }
};

ReactDOM.render(
  <Admin />,
  document.getElementById('root')
);
