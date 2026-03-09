import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axiosInstance from "../../../services/axiosConfig";
import toast from "react-hot-toast";

function ModalComp({
  show,
  handleClose,
  getAllProducts,
  text,
  selectedProduct,
}) {
  const [singleProduct, setSingleProduct] = useState({
    pName: "",
    pPrice: "",
    pDesc: "",
    pImg: "",
  });

  useEffect(() => {
    setSingleProduct(selectedProduct);
  }, [selectedProduct]);

  const handleChange = (event) => {
    setSingleProduct({
      ...singleProduct,
      [event.target.name]: event.target.value,
    });
  };
  console.log("singleProduct", singleProduct);

  const addProduct = async () => {
    try {
      let response = await axiosInstance.post(
        "/products/add-product",
        singleProduct
      );
      if (!response.error) {
        setSingleProduct({
          pName: "",
          pPrice: "",
          pDesc: "",
          pImg: "",
        });
        handleClose();
        toast.success(`${response.data.message}`);
        getAllProducts();
      }
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  const editProduct = async () => {
    try {
      let response = await axiosInstance.put(
        `/products/edit-product/${selectedProduct._id}`,
        singleProduct
      );
      setSingleProduct({
        pName: "",
        pPrice: "",
        pDesc: "",
        pImg: "",
      });
      handleClose();
      toast.success(response.message);
      getAllProducts();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSave = () => {
    if (text == "Add Product") {
      addProduct();
    } else if (text == "Edit Product") {
      editProduct();
    }
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{text}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="pName"
                value={singleProduct.pName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="pPrice"
                value={singleProduct.pPrice}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="pDesc"
                value={singleProduct.pDesc}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Image URL</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="pImg"
                value={singleProduct.pImg}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {text}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalComp;
