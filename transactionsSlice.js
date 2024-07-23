import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/transactions';

// Thunk for fetching transactions
export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Thunk for adding a transaction
export const addTransaction = createAsyncThunk('transactions/addTransaction', async (transaction) => {
  const response = await axios.post(API_URL, transaction);
  return response.data;
});

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default transactionsSlice.reducer;
