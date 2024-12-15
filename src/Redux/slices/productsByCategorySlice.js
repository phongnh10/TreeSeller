import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const productsCategoryRequest = createAsyncThunk(
  'product/category',
  async (idcategory, {rejectWithValue}) => {
    try {
      const url = new URL(
        `https://api-sellertree.onrender.com/product/category/${idcategory}`,
      );

      if (idcategory) {
        url.searchParams.append('idcategory', idcategory);
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        return rejectWithValue(errorResponse?.message || 'Lỗi không xác định');
      }

      return response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const productsByCateSlice = createSlice({
  name: 'productsCategoryRequest',
  initialState: {
    productsByCate: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(productsCategoryRequest.pending, state => {
        state.statusProducts = 'loading';
      })
      .addCase(productsCategoryRequest.fulfilled, (state, action) => {
        state.statusProducts = 'succeeded';
        state.productsByCate = action.payload;
      })
      .addCase(productsCategoryRequest.rejected, (state, action) => {
        state.statusProducts = 'failed';
        state.errorProduct = action.error.message;
      });
  },
});

export default productsByCateSlice.reducer;
