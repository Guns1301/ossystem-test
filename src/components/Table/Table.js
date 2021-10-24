import React from "react";
// import PropTypes from "prop-types";
import styles from "../Table/Table.module.css";
import defaultAvatar from "../.././defaultAvatar.png";

export default function Table(props) {
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
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}
