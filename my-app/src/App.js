import React from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./component/contactForm/ContactForm";
import ContactList from "./component/contactList/ContactLictContainer";
import Filter from "./component/filter/Filter";
import css from "../src/App.module.css";
import transitionTitle from "./transitionStyle/transitionTitle.module.css";

class App extends React.Component {
  state = {
    contacts: [],
    filters: "",
    animation: false
  };

  componentDidMount() {
    this.setState({
      animation: true
    });
  }

  handelSubmitForm = (e, data) => {
    e.preventDefault();
    this.props.addContact(data);

    const checkName = this.state.contacts.some(
      contact => contact.name === data.name
    );
    !checkName
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data]
        }))
      : alert("You can not add this contact!");
  };

  checkName = e => {
    this.setState({
      filters: e.target.value
    });
  };

  filterContacts = () => {
    const { filters } = this.state;
    return this.props.return.contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters)
    );
  };

  render() {
    const { animation, filters } = this.state;
    return (
      <div className={css.container}>
        <CSSTransition
          in={animation}
          timeout={1000}
          classNames={transitionTitle}
          mountOnEnter
        >
          <h1 className={css.container__caption}>Phonebook</h1>
        </CSSTransition>
        <ContactForm handelSubmitForm={this.handelSubmitForm} />
        {this.props.return.contacts.contacts.length > 2 && (
          <Filter checkName={this.checkName} value={filters} />
        )}

      {filters === "" ? (
          <ContactList contacts={this.props.return.contacts.contacts} />
        ) : (
          <ContactList contacts={this.filterContacts()} />
        )}
        {/* <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        /> */}
      </div>
    );
  }
}

export default App;
