"use strict";

var _redux = require("redux");

var incrementCount = function incrementCount() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$incrementBy = _ref.incrementBy,
      incrementBy = _ref$incrementBy === void 0 ? 1 : _ref$incrementBy;

  return {
    type: 'INCREMENT',
    incrementBy: incrementBy
  };
};

var decrementCount = function decrementCount() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$decrementBy = _ref2.decrementBy,
      decrementBy = _ref2$decrementBy === void 0 ? 1 : _ref2$decrementBy;

  return {
    type: 'DECREMENT',
    decrementBy: decrementBy
  };
};

var setCount = function setCount() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      count = _ref3.count;

  return {
    type: 'SET',
    count: count
  };
};

var resetCount = function resetCount() {
  return {
    type: 'RESET'
  };
}; //Reducer
//Pure function (not depending on outside data)
//Never change state or action


var countReducer = function countReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    count: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'RESET':
      return {
        count: 0
      };

    case 'SET':
      return {
        count: action.count
      };

    default:
      return state;
  }
};

var store = (0, _redux.createStore)(countReducer);
store.subscribe(function () {
  console.log(store.getState());
});
store.dispatch(incrementCount({
  incrementBy: 5
}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({
  decrementBy: 10
}));
store.dispatch(setCount({
  count: 101
}));
//# sourceMappingURL=redux-101.dev.js.map
