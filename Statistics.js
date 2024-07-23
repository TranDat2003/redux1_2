import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Statistics = () => {
  const transactions = useSelector((state) => state.transactions.items);

  // Kiểm tra nếu transactions không phải là mảng
  if (!Array.isArray(transactions)) {
    return (
      <View style={styles.container}>
        <Text>Data is not available.</Text>
      </View>
    );
  }

  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Statistics</Text>
      <Text>Total Income: ${totalIncome.toFixed(2)}</Text>
      <Text>Total Expense: ${totalExpense.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Statistics;
