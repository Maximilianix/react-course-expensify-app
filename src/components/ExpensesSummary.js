import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral, { validate } from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, notShowingExpenses }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const expenseWord1 = notShowingExpenses === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                {notShowingExpenses != 0 &&
                    <small>Not showing {notShowingExpenses} {expenseWord1} from filters.</small>
                }
                <div>
                    <Link className="page-header__actions button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const allExpenses = state.expenses.length;
    const expenseCount = visibleExpenses.length

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        notShowingExpenses: allExpenses - expenseCount
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
