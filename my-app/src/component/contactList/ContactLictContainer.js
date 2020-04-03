import { connect } from "react-redux";
import ContactList from "./ContactList";

const mapSTP = state => {
  return {
    contacts: state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filterName.toLowerCase())
    )
  };
};

export default connect(mapSTP)(ContactList);
