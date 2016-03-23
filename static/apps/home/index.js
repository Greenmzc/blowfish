const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./index.css');
const Header = require('components/header');
const List = require('components/list');
const Pagination = require('components/pagination');
const Footer = require('components/footer');

ReactDOM.render(
  <div>
    <Header />
    <List />
    <Pagination />
    <Footer />
  </div>,
  document.getElementById('root')
);
