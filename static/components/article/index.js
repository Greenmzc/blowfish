const React = require('react');
const styles = require('./index.css');

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className={styles.post}>
        <header>
          <h2>
            <a href="">xxx</a>
          </h2>
        </header>
        <section>
          <p>有时候浏览网页的时候会发现网页白屏一段时间才加载进来，性能非常糟糕，这和JavaScript脚本（后面简称脚本）的加载与执行相关。 脚本插入方式 脚本的插入有2种方式，内联（inline）和外链（external）： 1.内联</p>
          <a href="">»</a>
        </section>
        <footer>
          <img className={styles.face} src="http://blog.fangyi.me/content/images/2016/02/stock-photo-139079673-1.jpg" />
          <a href="">phieo</a>
          <a href="">编程</a>
          <time>16 March 2016</time>
        </footer>
      </article>
    );
  }
};

module.exports = Article;
