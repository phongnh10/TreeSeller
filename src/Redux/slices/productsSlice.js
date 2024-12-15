import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const productsResponse = createAsyncThunk('product/', async () => {
  const response = await fetch('https://api-sellertree.onrender.com/product/', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(productsResponse.pending, state => {
        state.status = 'loading';
        state.products;
      })
      .addCase(productsResponse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(productsResponse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
