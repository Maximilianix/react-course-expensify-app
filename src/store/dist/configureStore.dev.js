"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _expenses = _interopRequireDefault(require("../reducers/expenses"));

var _filters = _interopRequireDefault(require("../reducers/filters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  // Store creation
  var store = (0, _redux.createStore)((0, _redux.combineReducers)({
    expenses: _expenses["default"],
    filters: _filters["default"]
  }));
  return store;
};

exports["default"] = _default;
//# sourceMappingURL=configureStore.dev.js.map
