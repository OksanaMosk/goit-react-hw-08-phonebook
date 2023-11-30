import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (name, number, thunkAPI) => {
    try {
      const response = await instance.post('/contacts', name, number);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContacts.pending,
          deleteContacts.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContacts.rejected,
          deleteContacts.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

// export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
