// import React, { Component } from "react";
// import PropTypes from "prop-types";
import styles from "../Table/Table.module.css";
import defaultAvatar from "../.././defaultAvatar.png";

const Table = ({ contacts, deleteContact }) => {
  return (
    <>
      <table style={styles}>
        <caption>Users</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th src={defaultAvatar}>Avatar</th>
            <th>
              <button type="button" value="name">
                Name
              </button>
            </th>
            <th>
              <button type="button" value="number">
                Age
              </button>
            </th>
            <th>Status</th>
          </tr>
          {contacts.map(({ id, name, number }) => (
            <tr key={id}>
              <td>ID</td>
              <td src={defaultAvatar}>Avatar</td>
              <td>
                <button type="button" value="name">
                  {name}
                </button>
              </td>
              <td>
                <button type="button" value="number">
                  {number}
                </button>
              </td>
              <td>Status</td>
            </tr>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
};

export default Table;
