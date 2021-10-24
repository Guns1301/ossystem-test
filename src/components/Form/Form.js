import React from "react";
import { Component } from "react";
// import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import s from "../Form/Form.module.css";

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getContact({ ...this.state, id: uuidv4() });
    this.setState({ name: "", number: "" });
  };

  handleNameChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  return() {
    const { name, number } = this.state;
    <>
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            onChange={this.handleChangeName}
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
          />
        </label>
        <label>
          Age
          <input
            onChange={this.handleChangeNumber}
            name="number"
            value={number}
            placeholder="Enter your age"
          />
        </label>
        <button className={s.btn} type="submit">
          Create
        </button>
        <button className={s.btn} type="submit">
          Edit
        </button>
        <button className={s.btn} type="submit">
          Delete
        </button>
      </form>
    </>;
  }
}

// 1. регистрация колбэка   <input onChange={handleChangeName}
// 2.создание колбэка handleChangeName и вызов
