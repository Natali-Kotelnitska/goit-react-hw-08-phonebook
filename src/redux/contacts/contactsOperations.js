import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from 'services/contactsApi';

// import {getContacts, addContact, deleteContact} from

// getItem
export const getItems = createAsyncThunk(
  'items/getItemsStatus',
  async (__, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// addItem
export const addItem = createAsyncThunk(
  'items/addItemsStatus',
  async (contact, thunkAPI) => {
    try {
      const data = await addContact(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// remove Item
export const removeItem = createAsyncThunk(
  'items/removeItemsStatus',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
