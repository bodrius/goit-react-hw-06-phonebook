import React, { Component } from "react";

import { uuid } from "uuidv4";

import css from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={css.container__box}>
        <form
          onSubmit={e => {
            this.props.handelSubmitForm(e, {
              name: name,
              number: number,
              id: uuid()
            });
            this.setState({
              name: "",
              number: ""
            });
          }}
        >
          <h2 className={css.title}>Name</h2>
          <input
            className={css.main__input}
            type="text"
            name="name"
            value={name}
            placeholder="Enter contact name..."
            onChange={this.handleChangeInput}
            minLength={5}
          />
          <h2 className={css.title}>Number</h2>
          <input
            className={css.main__input}
            type="phone"
            name="number"
            placeholder="Enter contact number..."
            value={number}
            onChange={this.handleChangeInput}
            minLength={5}
          />
          <button className={css.button__submit} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
