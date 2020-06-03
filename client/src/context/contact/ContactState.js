import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
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

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Toffee Crunch',
        email: 'toffee@email.com',
        phone: '111-234-5678',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Chai Latte',
        email: 'chai@email.com',
        phone: '222-345-6789',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Genmai Cha',
        email: 'genmai@email.com',
        phone: '333-456-7890',
        type: 'professional',
      },
    ],
  };
};
