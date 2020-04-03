import { addContact, deleteContact, getNameFilter } from "./contactActions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    {
      name: "Sveta",
      number: "+38 (098) 024-24-12",
      id: "c4a96b84-4edd-4b9f-9fbd-4b8405bbfe2a"
    },
    {
      name: "Ira",
      number: "+38 (097) 024-24-12",
      id: "d7a8ef86-288f-43ee-a971-369a22136e9d"
    }
  ],
  filterName: ""
};

const getContact = (state, { _, payload }) => {
  return { ...state, contacts: [...state.contacts, payload].reverse()};
};
const removeContact = (state, { _, payload }) => {
  return {
    ...state,
    contacts: [...state.contacts.filter(contact => contact.id !== payload)]
  };
};
const filterContact = (state, { _, payload }) => {
  return { ...state, filterName: payload.filter };
};

export const rootReducer = createReducer(
  { ...initialState },
  {
    [addContact]: getContact,
    [deleteContact]: removeContact,
    [getNameFilter]: filterContact
  }
);

// export const rootReducer = (state = { ...initialState }, { type, payload }) => {
//   switch (type) {
//     case addContact.type:
//       return { ...state, contacts: [...state.contacts, payload] };

//     case deleteContact.type:
//       return {
//         ...state,
//         contacts: [...state.contacts.filter(contact => contact.id !== payload)]
//       };

//     case getNameFilter.type:
//       return {
//         ...state,
//         filterName: payload.filter
//       };

//     default:
//       return state;
//   }
// };

//Редюсеры (reducers) - это чистые функции, которые принимают предыдущее состояние
// приложения и действие, а затем возвращают новое следующее состояние.
//  определяют, как изменяется состояние приложения в ответ на действия,
// отправленные в хранилище.
