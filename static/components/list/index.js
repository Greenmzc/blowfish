const React = require('react');
const styles = require('./index.css');
const Article = require('../article');

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var list = [
      { _id: 1 },
      { _id: 2 },
      { _id: 3 }
    ];

    return (
      <main className={styles.content}>
      {
        list.length > 0 ? list.map(function(item, i) {
          return <Article key={item._id} />
        }) : <p>no article ~</p>
      }
      </main>
    );
  }
};

module.exports = List;
