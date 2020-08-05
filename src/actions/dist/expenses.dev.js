"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editExpense = exports.removeExpense = exports.addExpense = void 0;

var _uuid = require("uuid");

// ADD_EXPENSE
var addExpense = function addExpense() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '' : _ref$description,
      _ref$note = _ref.note,
      note = _ref$note === void 0 ? '' : _ref$note,
      _ref$amount = _ref.amount,
      amount = _ref$amount === void 0 ? 0 : _ref$amount,
      _ref$createdAt = _ref.createdAt,
      createdAt = _ref$createdAt === void 0 ? 0 : _ref$createdAt;

  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: (0, _uuid.v4)(),
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt
    }
  };
}; // REMOVE_EXPENSE


exports.addExpense = addExpense;

var removeExpense = function removeExpense() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      id = _ref2.id;

  return {
    type: 'REMOVE_EXPENSE',
    id: id
  };
}; // EDIT_EXPENSE


exports.removeExpense = removeExpense;

var editExpense = function editExpense(id, updates) {
  return {
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
  };
};

exports.editExpense = editExpense;
//# sourceMappingURL=expenses.dev.js.map
