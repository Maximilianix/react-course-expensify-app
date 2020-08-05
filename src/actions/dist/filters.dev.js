"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEndDate = exports.setStartDate = exports.sortByAmount = exports.sortByDate = exports.setTextFilter = void 0;

// SET_TEXT_FILTER
var setTextFilter = function setTextFilter() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    type: 'SET_TEXT_FILTER',
    text: text
  };
}; // SORT_BY_DATE


exports.setTextFilter = setTextFilter;

var sortByDate = function sortByDate() {
  return {
    type: 'SORT_BY_DATE'
  };
}; // SORT_BY_AMOUNT


exports.sortByDate = sortByDate;

var sortByAmount = function sortByAmount() {
  return {
    type: 'SORT_BY_AMOUNT'
  };
}; // SET_START_DATE


exports.sortByAmount = sortByAmount;

var setStartDate = function setStartDate(startDate) {
  return {
    type: 'SET_START_DATE',
    startDate: startDate
  };
}; // SET_END_DATE


exports.setStartDate = setStartDate;

var setEndDate = function setEndDate(endDate) {
  return {
    type: 'SET_END_DATE',
    endDate: endDate
  };
};

exports.setEndDate = setEndDate;
//# sourceMappingURL=filters.dev.js.map
