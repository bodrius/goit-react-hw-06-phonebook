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
    animation: false
  };

  componentDidMount() {
    this.setState({
      animation: true
    });
  }

  handelSubmitForm = (e, data) => {
    e.preventDefault();
    let storeContacts = this.props.return.contacts;
    const checkName = storeContacts.some(contact => contact.name === data.name);
    if (!checkName) {
      this.props.addContact(data);
    } else {
      alert("You can not add this contact!");
    }
  };

  render() {
    const { animation } = this.state;
    const showFilter = this.props.return.contacts;
    console.log(showFilter);
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
        {showFilter.length > 2 && <Filter />}

        <ContactList deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
