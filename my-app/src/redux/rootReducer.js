import { contactTypes } from "../redux/contactTypes";

export const rootReducer = (state = { contacts: [] }, { type, payload }) => {
  switch (type) {
    case contactTypes.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };

    case contactTypes.REMOVE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts.filter(contact => contact.id !== payload)]
      };

      // case contactTypes.FILTER_NAME:
      //   return {...state.contacts}

    default:
      return state;
  }
};

//Редюсеры (reducers) - это чистые функции, которые принимают предыдущее состояние
// приложения и действие, а затем возвращают новое следующее состояние.
//  определяют, как изменяется состояние приложения в ответ на действия,
// отправленные в хранилище.
