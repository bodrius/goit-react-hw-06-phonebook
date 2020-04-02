import { contactTypes } from "../redux/contactTypes";

const initialState={
  contacts:[{"name":"Sveta","number":"+38 (098) 024-24-12","id":"c4a96b84-4edd-4b9f-9fbd-4b8405bbfe2a"},
  {"name":"Ira","number":"+38 (097) 024-24-12","id":"d7a8ef86-288f-43ee-a971-369a22136e9d"}],
  filterName:[]
}


export const rootReducer = (
  state = { ...initialState },
  { type, payload }
) => {
  switch (type) {
    case contactTypes.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };

    case contactTypes.REMOVE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts.filter(contact => contact.id !== payload)],
        filterName: [...state.filterName.filter(contact => contact.id !== payload)],
      };

    case contactTypes.FILTER_NAME:
      return {
        ...state,
        filterName: [...state.contacts.filter(contact => contact.name.toLowerCase() === payload.toLowerCase())]
      };

    default:
      return state;
  }
};

//Редюсеры (reducers) - это чистые функции, которые принимают предыдущее состояние
// приложения и действие, а затем возвращают новое следующее состояние.
//  определяют, как изменяется состояние приложения в ответ на действия,
// отправленные в хранилище.
