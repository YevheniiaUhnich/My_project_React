import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsModalOpen,
  selectModalContactId,
  selectModalContactName,
  selectModalPosition,
} from "../../redux/contactModal/selectors";
import { deleteContacts } from "../../redux/contacts/operation";
import { closeModal } from "../../redux/contactModal/slice";
import s from "./ContactConfirmDeleteModal.module.css";

export const ContactConfirmDeleteModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const contactId = useSelector(selectModalContactId);
  const contactName = useSelector(selectModalContactName);
  const position = useSelector(selectModalPosition);

  if (!isOpen) return null;

  const style = {
    position: "absolute",
    top: position.top + 220,
    left: position.left,
    zIndex: 1000,
  };
  const handleConfirm = () => {
    dispatch(deleteContacts(contactId));
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <div className={s.confirmWrapper} style={style}>
      <div className={s.confirm}>
        <p className={s.titleConfirm}>
          Are you sure you want to delete the contact "{contactName}"?
        </p>
        <div className={s.boxBtn}>
          <button onClick={handleConfirm} className={s.btnConfirm}>
            Confirm
          </button>
          <button onClick={handleCancel} className={s.btnCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
