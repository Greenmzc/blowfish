const { combineReducers } = require('redux');
const fields = require('./fields');

const Forms = combineReducers({
  fields
});

module.exports = Forms;
