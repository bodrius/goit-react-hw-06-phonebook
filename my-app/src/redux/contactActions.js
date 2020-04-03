import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("ADD_CONTACT");
export const deleteContact = createAction("REMOVE_CONTACT");
export const getNameFilter = createAction("FILTER_NAME", filter => {
 return  {
  payload: {filter}
  }
});

// export const deleteContact = id => ({
//   type: contactTypes.REMOVE_CONTACT,
//   payload: id
// });

// export const getNameFilter = (filter) =>({
//   type: contactTypes.FILTER_NAME,
//   payload: {filter}
// })

//ACTION - доставляют данные из компонентов в хранилище STORE
