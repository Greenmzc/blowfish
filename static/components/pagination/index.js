const React = require('react');
const styles = require('./index.css');

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className={styles.wrapper}>
        <a className={styles.pre} href="">上一页</a>
        <a className={styles.current} herf="">1</a>
        <a className={styles.page} herf="">2</a>
        <a className={styles.page} herf="">3</a>
        <a className={styles.page} herf="">4</a>
        <a className={styles.next} herf="">下一页</a>
      </nav>
    );
  }
};

module.exports = Pagination;
