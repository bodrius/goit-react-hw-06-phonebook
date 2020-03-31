import React from "react";
import ContactListItem from "../contactListItem/ContactContainer";
import css from "./Contacts.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import transitionItem from "../../transitionStyle/transitionItem.module.css";

const ContactList = props => {
  const { contacts=[], deleteContact } = props;
  return (
    <TransitionGroup component="ul" className={css.contacts__list}>
      { contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          classNames={transitionItem}
          timeout={500}
          unmountOnExit
        >
          <ContactListItem
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};



export default ContactList;
