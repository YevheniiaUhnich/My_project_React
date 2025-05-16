export const selectIsModalOpen = (state) => state?.modal?.isOpen ?? false;
export const selectModalContactId = (state) => state?.modal?.contactId ?? null;
export const selectModalContactName = (state) =>
  state?.modal?.contactName ?? null;
export const selectModalPosition = (state) => state?.modal?.position ?? null;
