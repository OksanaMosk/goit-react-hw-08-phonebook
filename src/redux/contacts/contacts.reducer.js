// import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
// import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
// axios.defaults.baseURL = 'https://655fadc5879575426b45a7ec.mockapi.io';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-123-5633' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-893-1233' },
    { id: 'id-3', name: 'Eden Clements', number: '645-173-7933' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-913-2633' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContacts(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');

//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// export const addContacts = createAsyncThunk(
//   'contacts/addContacts',
//   async (name, phone, id, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', name, phone, id);

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContacts',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// const initialState = {
//   contacts: [],
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//         state.contacts = payload;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(addContacts.fulfilled, (state, { payload }) => {
//         state.contacts.push(payload);
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(deleteContacts.fulfilled, (state, { payload }) => {
//         state.contacts = state.contacts.filter(
//           contact => contact.id !== payload.id
//         );
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.pending,
//           addContacts.pending,
//           deleteContacts.pending
//         ),
//         state => {
//           state.isLoading = true;
//           state.error = null;
//         }
//       )

//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContacts.rejected,
//           deleteContacts.rejected
//         ),
//         (state, { payload }) => {
//           state.isLoading = false;
//           state.error = payload;
//         }
//       ),
// });

// export const contactsReducer = contactsSlice.reducer;
