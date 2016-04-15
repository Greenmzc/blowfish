const input = (state, action) => {
  switch (action.type) {
    case 'BLUR':
      if (action.index != state.index) {
        return state;
      }
      return {
        index: action.index,
        visited: true,
        value: action.value
      };
    case 'FOCUS':
      return {
        index: action.index,
        visited: true,
        value: ''
      };
    default:
      return state;
  }
};

const form = (state = [], action) => {
  switch (action.type) {
    case 'BLUR':
      return state.map(field => {
        return input(field, action);
      });
    case 'FOCUS':
      if (state.length > 0 && state.some(field => field.index == action.index)) {
        return state;
      }

      return [
        ...state,
        input(undefined, action)
      ];
    default:
      return state;
  }
};

module.exports = form;
