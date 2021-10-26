import PropTypes from "prop-types";
import React from "react";
import { Component } from "react";
// import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import s from "../Form/Form.module.css";

export default class Form extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ name, number, id: uuidv4() });
    this.reset();
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  componentDidMount() {
    this.setState({ ...this.state, contacts: this.props.contacts });
  }

  render() {
    const { name, number } = this.state;
    return (
      <>
        <div>
          <form className={s.form} onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                onChange={this.handleInputChange}
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name"
              />
            </label>
            <label>
              Age
              <input
                onChange={this.handleInputChange}
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
        </div>
      </>
    );
  }
}

Form.propTypes = {
  getContact: PropTypes.func,
};

// 1. регистрация колбэка   <input onChange={handleChangeName}
// 2.создание колбэка handleChangeName и вызов
