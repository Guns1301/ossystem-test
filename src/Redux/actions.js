import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("add");
export const editContact = createAction("edit");
export const deleteContact = createAction("delete");
