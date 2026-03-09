import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import axiosInstance from "../../../services/axiosConfig";
import ModalComp from "../ModalComp";
import ConfirmModal from "../ConfirmModal";

function TableComp() {
  const [allProducts, setAllProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isEdit, setisEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseConfirmModal = () => setShowConfirmModal(false);
  const handleShow = () => {
    setShow(true);
    setisEdit(false);
  };

  const handleEdit = (product) => {
    setShow(true);
    setisEdit(true);
    setSelectedProduct(product);
  };
  const handleShowConfirmModal = (product) => {
    setShowConfirmModal(true);
    setSelectedProduct(product);
  };

  const getAllProducts = async () => {
    try {
      const response = await axiosInstance.get("/products/products");
      setAllProducts(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  console.log(allProducts);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Product Image</th>
            <th>
              <Button className="btn btn-danger" onClick={handleShow}>
                Add
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product._id}</td>
                <td>{product.pName}</td>
                <td>{product.pPrice}</td>
                <td>{product.pDesc}</td>
                <td>
                  <img
                    src={product.pImg}
                    alt={product.pName}
                    style={{ width: "200px", height: "150px" }}
                  />
                </td>
                <td>
                  <Button
                    onClick={() => {
                      handleEdit(product);
                    }}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    onClick={() => {
                      handleShowConfirmModal(product);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <ModalComp
        show={show}
        handleClose={handleClose}
        getAllProducts={getAllProducts}
        text={isEdit ? "Edit Product" : "Add Product"}
        selectedProduct={selectedProduct}
      />
      <ConfirmModal
        show={showConfirmModal}
        handleClose={handleCloseConfirmModal}
        selectedProduct={selectedProduct}
        getAllProducts={getAllProducts}
      />
    </div>
  );
}

export default TableComp;
