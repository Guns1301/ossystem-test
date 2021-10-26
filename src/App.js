import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";

export default class App extends Component {
  state = {
    contacts: [],
  };
  addContact = (data) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, data],
    }));
  };

  // getContact = (firstContact) => {
  //   const { contacts } = this.state;
  // };

  deleteContact = (contactId) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <Form
          getContact={this.getContact}
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <Table
          deleteContact={this.deleteContact}
          contacts={this.state.contacts}
        />
        ;
      </>
    );
  }
}
