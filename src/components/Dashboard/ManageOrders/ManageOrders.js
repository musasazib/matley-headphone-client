import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [orderId, setOrderId] = useState("");

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`
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
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        // console.log(data, orderId);
        fetch(`http://localhost:5000/dorders/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log('bbbbb',result));
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
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <select
                                            onClick={() => handleOrderId(pd?._id)}
                                            {...register("status")}
                                        >
                                            <option value="approve">Approve</option>
                                            <option value="shipped ">Shipped </option>
                                            <option value="done">Done</option>
                                        </select>
                                        <input type="submit" />

                                    </form>
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