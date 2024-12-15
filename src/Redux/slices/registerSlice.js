import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const registerRequest = createAsyncThunk('user/register', async data => {
  const response = await fetch(
    'https://api-sellertree.onrender.com/user/register',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    },
  );
  if (!response.ok) throw new Error('Failed');
  return response.json();
});

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerRequest.pending, state => {
        state.status = 'loading';
      })
      .addCase(registerRequest.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerRequest.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default registerSlice.reducer;
