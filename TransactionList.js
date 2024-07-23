import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions } from './transactionsSlice';

const TransactionList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.items);
  const status = useSelector((state) => state.transactions.status);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction List</Text>
      {status === 'loading' ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.date}</Text>
              <Text>{item.type === 'income' ? 'Income' : 'Expense'}</Text>
              <Text>${item.amount.toFixed(2)}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TransactionList;
