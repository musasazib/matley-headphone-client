import React, { useEffect, useState } from 'react';
import './MyBooking.css';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const MyBooking = () => {
    const { user } = useAuth();
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myBooking/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBooking(data));
    }, [user.email]);

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
                        const remainingUser = booking.filter(book => book._id !== id);
                        setBooking(remainingUser);
                    }
                })
        }
    }

    return (
        <div>
            <div className="container">
                <h2 className="m-5 header-style">My Booking</h2>
                <h4 className="m-3 header-style-two">My Total Booking: {booking?.length}</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {booking?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{pd.ProductName}</td>
                                <td>{pd.price}</td>
                                <td>{pd.address}</td>
                                <td>{pd.phone}</td>
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

export default MyBooking;