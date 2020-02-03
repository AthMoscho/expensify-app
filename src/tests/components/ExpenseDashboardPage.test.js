import React from 'react';
import { shallow } from 'enzyme';
import ExpensesDashboardPage  from '../../components/ExpensesDashboardPage';

test('should render ExpenseDashboardPage correclty', () => {
    const wrapper = shallow(<ExpensesDashboardPage /> );
    expect(wrapper).toMatchSnapshot();
})