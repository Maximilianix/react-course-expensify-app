"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Filters Reducer
var filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : filtersReducerDefaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return _objectSpread({}, state, {
        text: action.text
      });

    case 'SORT_BY_AMOUNT':
      return _objectSpread({}, state, {
        sortBy: 'amount'
      });

    case 'SORT_BY_DATE':
      return _objectSpread({}, state, {
        sortBy: 'date'
      });

    case 'SET_START_DATE':
      return _objectSpread({}, state, {
        startDate: action.startDate
      });

    case 'SET_END_DATE':
      return _objectSpread({}, state, {
        endDate: action.endDate
      });

    default:
      return state;
  }
};

exports["default"] = _default;
//# sourceMappingURL=filters.dev.js.map
