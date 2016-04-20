const React =  require('react');
const { render } = require('react-dom');
const { Router, Route, IndexRoute, Link, hashHistory } = require('react-router');
const New = require('./new');
const Posts = require('./posts');
const Tags = require('./tags');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/new">new</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/tags">Tags</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Posts} />
      <Route path="new" component={New} />
      <Route path="posts" component={Posts} />
      <Route path="tags" component={Tags} />
    </Route>
  </Router>
), document.getElementById('root'));
