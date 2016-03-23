const React = require('react');
const styles = require('./index.css');

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={styles.wrapper}>
        <p>© 2016 phieo'blog — All Rights Reserved.</p>
      </footer>
    );
  }
};

module.exports = Pagination;
