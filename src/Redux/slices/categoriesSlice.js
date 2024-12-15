import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Thunk cho API đăng nhập
export const categoriesRequest = createAsyncThunk('category/', async () => {
  const response = await fetch(
    'https://api-sellertree.onrender.com/category/',
    {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(data),
    },
  );
  if (!response.ok) throw new Error('Failed to categories');
  return response.json();
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(categoriesRequest.pending, state => {
        state.status = 'loading';
      })
      .addCase(categoriesRequest.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(categoriesRequest.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
