import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import Statistics from './Statistics';
import 'react-native-get-random-values';

const App = () => {
  return (
    <Provider store={store}>
      <AddTransaction />
      <Statistics />
      <TransactionList />
    </Provider>
  );
};

export default App;
