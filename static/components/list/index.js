const React = require('react');
const styles = require('./index.css');

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className={styles.a}>list</p>
      </div>
    );
  }
};

module.exports = List;
