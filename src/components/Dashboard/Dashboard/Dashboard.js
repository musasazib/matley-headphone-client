import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyBooking from '../MyBooking/MyBooking';

const Dashboard = () => {
    return (
        <div>
            <h1>This is Dashboard</h1>
            <MakeAdmin></MakeAdmin>
            <AddProduct></AddProduct>
            <MyBooking></MyBooking>
        </div>
    );
};

export default Dashboard;