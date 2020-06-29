import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CONTACT_ERROR,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    // contacts: [
    //   {
    //     id: 1,
    //     name: 'Toffee Crunch',
    //     email: 'toffee@email.com',
    //     phone: '111-234-5678',
    //     type: 'personal',
    //   },
    //   {
    //     id: 2,
    //     name: 'Chai Latte',
    //     email: 'chai@email.com',
    //     phone: '222-345-6789',
    //     type: 'personal',
    //   },
    //   {
    //     id: 3,
    //     name: 'Genmai Cha',
    //     email: 'genmai@email.com',
    //     phone: '333-456-7890',
    //     type: 'professional',
    //   },
    // ],
    contacts: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  // Update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set current
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
