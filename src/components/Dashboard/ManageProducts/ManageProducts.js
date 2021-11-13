import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-garden-68669.herokuapp.com/moreProducts')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://sleepy-garden-68669.herokuapp.com/moreProducts/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully');
                        const remainingUser = product.filter(pd => pd._id !== id);
                        setProduct(remainingUser);
                    }
                })
        }
    }
    return (
        <div>
            <div className="container">
                <h2 className="m-5 header-style">All Products</h2>
                <h4 className="m-3 header-style-two">Total Products: {product?.length}</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {product?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{pd.ProductName}</td>
                                <td>{pd.price}</td>
                                <button
                                    onClick={() => handleDeleteUser(pd._id)}
                                    className="btn-book"
                                >
                                    Cancel
                                </button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ManageProducts;