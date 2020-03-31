import { connect } from "react-redux";
import ContactList from "./ContactList";

const mapSTP = state => {
  return {
    contacts: state.contacts
  };
};

export default connect(mapSTP)(ContactList);
