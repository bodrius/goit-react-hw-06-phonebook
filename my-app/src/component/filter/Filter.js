import React, { Component } from "react";
import css from "./Filter.module.css";
import { connect } from "react-redux";
import { getNameFilter } from "../../redux/contactActions";

class Filter extends Component {
  state = {
    query: ""
  };

  handlSubmitFilter = e => {
    e.preventDefault();
    this.props.getNameFilter(this.state.query);
    this.setState({
      query: ""
    });
    this.checkOurStore(this.props.return.contacts);
  };

  getFilterQuery = e => {
    this.setState({
      query: e.target.value
    });
  };

  checkOurStore = arr => {
    const filterSearchContacts = arr.some(
      contact => contact.name.toLowerCase() === this.state.query.toLowerCase()
    );
    if (filterSearchContacts) {
      return;
    } else if (this.state.query === "") {
      return;
    } else {
      alert("OOOPPPPSSSSSSS......!!! We did not find this name!");
    }
  };

  render() {
    return (
      <div className={css.find__box}>
        <h3 className={css.find__title}>Find contacts by name:</h3>
        <form onSubmit={this.handlSubmitFilter}>
          <input
            className={css.find__input}
            placeholder="Please enter search name..."
            type="text"
            onChange={this.getFilterQuery}
            value={this.state.query}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  return: {
    contacts: state.contacts
  }
});


// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }




export default connect(mapStateToProps, { getNameFilter })(Filter);
