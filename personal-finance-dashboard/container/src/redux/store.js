
import { createStore } from 'redux';

const initialState = {
  income: [],
  expenses: [],
  investments: []
};

function financeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INCOME':
      return { ...state, income: [...state.income, action.payload] };
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'ADD_INVESTMENT':
      return { ...state, investments: [...state.investments, action.payload] };
    default:
      return state;
  }
}

const store = createStore(financeReducer);

export default store;
