import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

//should return 0 if no expenses 
test('should return 0 if no expenses ', () => {
    const totalExpenses = selectExpensesTotal([]);
    expect(totalExpenses).toBe(0)
})

test('should corrrectly add up a single expense', () => {
    const totalExpenses = selectExpensesTotal([expenses[0]]);
    expect(totalExpenses).toBe(195)
})

test('should corrrectly add up a multiple expenses', () => {
    const totalExpenses = selectExpensesTotal(expenses);
    expect(totalExpenses).toBe(5445)
})

