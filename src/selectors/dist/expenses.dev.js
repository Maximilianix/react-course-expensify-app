"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Get visible expenses
var _default = function _default(expenses, _ref) {
  var text = _ref.text,
      sortBy = _ref.sortBy,
      startDate = _ref.startDate,
      endDate = _ref.endDate;
  return expenses.filter(function (expense) {
    var startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    var endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    var textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort(function (a, b) {
    if (sortBy === 'date') {
      return a.amount < b.amount ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

exports["default"] = _default;
//# sourceMappingURL=expenses.dev.js.map
