import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import numeral from 'numeral';

numeral.register('locale', 'gr', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    currency: {
        symbol: '€'
    }
})

numeral.locale('gr');

test('Should render expensesSummary with 1 expense' ,() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={55203}/>)
    expect(wrapper).toMatchSnapshot();
})


test('Should render expensesSummary with multiple expenses' ,() => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={55222503}/>)
    expect(wrapper).toMatchSnapshot();
})