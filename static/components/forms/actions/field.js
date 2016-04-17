const { BLUR, FOCUS } = require('../consts');

exports.blurField = (index, key, value, isValid) => {
  return {
    type: BLUR,
    index,
    key,
    value,
    isValid
  };
};

exports.focusField = (index, key) => {
  return {
    type: FOCUS,
    index,
    key
  };
};
