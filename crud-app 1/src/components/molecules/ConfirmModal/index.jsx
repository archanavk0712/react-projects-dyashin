import React from "react";
import { Button, Modal } from "react-bootstrap";
import axiosInstance from "../../../services/axiosConfig";
import toast from "react-hot-toast";

function ConfirmModal({ show, handleClose, selectedProduct, getAllProducts }) {
  const deleteProduct = async () => {
    try {
      let response = await axiosInstance.delete(
        `/products/delete-product/${selectedProduct._id}`
      );
      handleClose();
      toast.success(`${response.message}`);
      getAllProducts();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConfirmModal;
