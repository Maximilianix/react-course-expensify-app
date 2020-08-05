"use strict";

var _redux = require("redux");

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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


var removeExpense = function removeExpense() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      id = _ref2.id;

  return {
    type: 'REMOVE_EXPENSE',
    id: id
  };
}; // EDIT_EXPENSE


var editExpense = function editExpense(id, updates) {
  return {
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
  };
}; // SET_TEXT_FILTER


var setTextFilter = function setTextFilter() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    type: 'SET_TEXT_FILTER',
    text: text
  };
}; // SORT_BY_DATE


var sortByDate = function sortByDate() {
  return {
    type: 'SORT_BY_DATE'
  };
}; // SORT_BY_AMOUNT


var sortByAmount = function sortByAmount() {
  return {
    type: 'SORT_BY_AMOUNT'
  };
}; // SET_START_DATE


var setStartDate = function setStartDate(startDate) {
  return {
    type: 'SET_START_DATE',
    startDate: startDate
  };
}; // SET_END_DATE


var setEndDate = function setEndDate(endDate) {
  return {
    type: 'SET_END_DATE',
    endDate: endDate
  };
}; // Expenses Reducer


var expensesReducerDefaultState = [];

var expensesReducer = function expensesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : expensesReducerDefaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_EXPENSE':
      return [].concat(_toConsumableArray(state), [action.expense]);

    case 'REMOVE_EXPENSE':
      return state.filter(function (_ref3) {
        var id = _ref3.id;
        return id !== action.id;
      });

    case 'EDIT_EXPENSE':
      return state.map(function (expense) {
        if (expense.id === action.id) {
          return _objectSpread({}, expense, {}, action.updates);
        } else {
          return expense;
        }

        ;
      });

    default:
      return state;
  }
}; // Filters Reducer


var filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

var filtersReducer = function filtersReducer() {
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
}; // Get visible expenses


var getVisibleExpenses = function getVisibleExpenses(expenses, _ref4) {
  var text = _ref4.text,
      sortBy = _ref4.sortBy,
      startDate = _ref4.startDate,
      endDate = _ref4.endDate;
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
}; // Store creation


var store = (0, _redux.createStore)((0, _redux.combineReducers)({
  expenses: expensesReducer,
  filters: filtersReducer
}));
store.subscribe(function () {
  var state = store.getState();
  var visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
var expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 100,
  createdAt: -2000
}));
var expenseTwo = store.dispatch(addExpense({
  description: 'Coffee',
  amount: 300,
  createdAt: -1000
})); // store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount()); // store.dispatch(sortByDate());
// store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250

var demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
//# sourceMappingURL=redux-expensify.dev.js.map
