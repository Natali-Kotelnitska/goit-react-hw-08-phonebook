import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterContact } from './contactsActions';

const filter = createReducer('', {
  // _(нижнє підкреслення - коли не потрібен state)
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ filter });
// export default filter;
