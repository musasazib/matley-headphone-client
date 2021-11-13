import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    const { register } = useForm();

    const [optionValue, setOptionValue] = useState("");
    const handleSelectValue = (e) => {
        setOptionValue(e.target.value);
    };

    useEffect(() => {
        fetch('https://sleepy-garden-68669.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://sleepy-garden-68669.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Successfully');
                        const remainingUser = orders.filter(od => od._id !== id);
                        setOrders(remainingUser);
                    }
                })
        }
    }

    const onSubmit = (id) => {
        // console.log(id, optionValue);
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status: optionValue }),
        })
            .then((res) => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully.');
                    setOptionValue({});
                }
                // console.log(optionValue);
            });

    };
    return (
        <div>
            <div className="container">
                <h2 className="m-5 header-style">Manage Orders</h2>
                <h4 className="m-3 header-style-two">Total Orders: {orders?.length}</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    {orders?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{pd.ProductName}</td>
                                <td>{pd.price}</td>
                                <td>{pd.address}</td>
                                <td>{pd.phone}</td>
                                <td>{pd.status}</td>
                                <td>
                                    <div>
                                        <select
                                            onChange={handleSelectValue}
                                        // {...register("status")}
                                        >
                                            <option value="Approved">Approved</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Done">Done</option>
                                        </select>
                                        <Button onClick={() => onSubmit(pd._id)}>Update</Button>

                                    </div>
                                </td>
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

export default ManageOrders;