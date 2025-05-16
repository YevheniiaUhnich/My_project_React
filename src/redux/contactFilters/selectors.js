import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../../redux/contacts/selectors";

export const selectNameFilter = (state) => {
  console.log(state.filters.name);
  return state.filters.name;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    if (!nameFilter || nameFilter.trim() === "") {
      return contacts;
    }
    const normalized = nameFilter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalized) ||
        contact.number.includes(nameFilter)
    );
  }
);

export const selectFilter = (state) => state.filters.filter;
