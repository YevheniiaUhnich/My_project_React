export const selectAllContacts = (state) => state?.contacts?.items ?? [];

export const selectContacts = (state) => state?.contacts?.items ?? [];

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectEditContact = (state) => {
  console.log("SELECTOR CALLED", state);
  return state.contacts?.editContact ?? null;
};
