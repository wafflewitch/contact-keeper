import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
