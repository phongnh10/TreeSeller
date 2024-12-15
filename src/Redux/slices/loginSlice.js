import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Thunk cho API đăng nhập
export const loginRequest = createAsyncThunk('user/login', async data => {
  const response = await fetch(
    'https://api-sellertree.onrender.com/user/login',
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    },
  );
  if (!response.ok) throw new Error('Failed');
  return response.json();
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginRequest.pending, state => {
        state.status = 'loading';
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
