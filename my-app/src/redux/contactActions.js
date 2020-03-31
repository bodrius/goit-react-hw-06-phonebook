import { contactTypes } from "./contactTypes";


export const addContact = contact => ({
  type: contactTypes.ADD_CONTACT,
  payload: contact
});

export const deleteContact = id => ({
  type: contactTypes.REMOVE_CONTACT,
  payload: id
});

export const filterName = value =>({
  type: contactTypes.FILTER_NAME,
  playload: value
})

//ACTION - доставляют данные из компонентов в хранилище STORE
