exports.blurField = (value, index) => {
  return {
    type: 'BLUR',
    index,
    value
  };
};

exports.focusField = (index) => {
  return {
    type: 'FOCUS',
    index
  };
};
