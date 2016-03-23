const React = require('react');
const styles = require('./index.css');

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={styles.wrapper}>
        <h1 className={styles.title}>my blog</h1>
        <h2 className={styles.description}>Keep Alive, Keep Connected</h2>
      </header>
    );
  }
};

module.exports = Header;
