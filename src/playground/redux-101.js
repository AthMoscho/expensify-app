import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type){ 
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decremetBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decremetBy
            }
        case 'SET': {
            return {
                count: action.count
            }
        }
        case 'RESET': {
            return {
                count: 0
            }
        }
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy: 8}))


store.dispatch({
    type: 'INCREMENT'
})


store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count:100}));