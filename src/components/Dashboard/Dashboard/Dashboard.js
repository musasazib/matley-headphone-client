import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Header from "../../Shared/Header/Header";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyBooking from "../MyBooking/MyBooking";
import Review from "../Review/Review";
import "./Dashboard.css";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    return (
        <div>
            <Header></Header>
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5>Dashboard</h5>
                            <Link to={`${url}`}>
                                <p className="dashboard-menu"></p>
                            </Link>

                            <Link to={`${url}/BookingList`}>
                                <p className="dashboard-menu">My Orders</p>
                            </Link>

                            <Link to={`${url}/review`}>
                                <p className="dashboard-menu">Review</p>
                            </Link>
                            {admin && <div>
                                <p className="dashboard-menu">Orders list</p>
                                <Link to={`${url}/addProduct`}>
                                    <p className="dashboard-menu">Add Product</p>
                                </Link>
                                <Link to={`${url}/makeAdmin`}>
                                    <p className="dashboard-menu">Make Admin</p>
                                </Link>
                                <Link to={`${url}/manageProducts`}>
                                    <p className="dashboard-menu">Manage Products</p>
                                </Link>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <MyBooking></MyBooking>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/BookingList`}>
                                <MyBooking></MyBooking>
                            </Route>
                            <Route exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route exact path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;




// import React from 'react';
// import AddProduct from '../AddProduct/AddProduct';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import MyBooking from '../MyBooking/MyBooking';

// const Dashboard = () => {
//     return (
//         <div>
//             <h1>This is Dashboard</h1>
//             <MakeAdmin></MakeAdmin>
//             <AddProduct></AddProduct>
//             <MyBooking></MyBooking>
//         </div>
//     );
// };

// export default Dashboard;