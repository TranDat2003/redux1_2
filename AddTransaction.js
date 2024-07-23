import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTransaction } from './transactionsSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTransaction = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('income'); // or 'expense'
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTransaction({
      id: uuidv4(),
      title,
      description,
      date,
      type,
      amount: parseFloat(amount),
    }));
    setTitle('');
    setDescription('');
    setDate('');
    setType('income');
    setAmount('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add New Transaction</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <TextInput
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
          style={styles.input}
        />
        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>Type:</Text>
          <TextInput
            placeholder="Type (income/expense)"
            value={type}
            onChangeText={setType}
            style={styles.input}
          />
        </View>
        <TextInput
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button title="Add Transaction" onPress={handleAdd} color="#4CAF50" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  radioLabel: {
    marginRight: 8,
  },
});

export default AddTransaction;
