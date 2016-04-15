const { BLUR, FOCUS } = require('../consts');

const _field = (state, action) => {
  switch (action.type) {
    case BLUR:
      if (action.index != state.index) {
        return state;
      }
      return {
        index: action.index,
        value: action.value,
        isValid: action.isValid
      };
    case FOCUS:
      return {
        index: action.index,
        value: '',
        isValid: false
      };
    default:
      return state;
  }
};

const fields = (state = [], action) => {
  switch (action.type) {
    case BLUR:
      return state.map(field => {
        return _field(field, action);
      });
    case FOCUS:
      if (state.length > 0 && state.some(field => field.index == action.index)) {
        return state;
      }

      return [
        ...state,
        _field(undefined, action)
      ];
    default:
      return state;
  }
};

module.exports = fields;
