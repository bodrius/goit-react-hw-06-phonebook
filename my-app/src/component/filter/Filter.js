import React from "react";
import css from "./Filter.module.css";
import { connect } from "react-redux";
import { getNameFilter } from "../../redux/contactActions";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={css.find__box}>
      <h3 className={css.find__title}>Find contacts by name:</h3>
      <input
        className={css.find__input}
        placeholder="Please enter search name..."
        type="text"
        onChange={e => onChangeFilter(e.target.value)}
        value={value}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.filterName
});

const mapDispatchToProps = {
  onChangeFilter: getNameFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
