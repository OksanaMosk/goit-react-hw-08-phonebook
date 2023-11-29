import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';
// axios.defaults.baseURL = 'https://655fadc5879575426b45a7ec.mockapi.io';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', formData);
      setToken(data.token);
      // console.log(' data: ', data);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', formData);
      setToken(data.token);
      // console.log(' data: ', data);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken('token');
      const { data } = await instance.get('/users/current');
      setToken(token);
      console.log(' data: ', data);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

const initialState = {
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.authenticated = true;
        state.userData = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          refreshThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.pending,
          refreshThunk.pending
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

// export const {  } = authSlice.actions;
export const authReducer = authSlice.reducer;
