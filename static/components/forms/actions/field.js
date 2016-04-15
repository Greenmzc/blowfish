const { BLUR, FOCUS } = require('../consts');

exports.blurField = (index, value, isValid) => {
  return {
    type: BLUR,
    index,
    value,
    isValid
  };
};

exports.focusField = (index) => {
  return {
    type: FOCUS,
    index
  };
};
