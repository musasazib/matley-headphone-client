import React from "react";
import { Button } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import Header from "../../Shared/Header/Header";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyBooking from "../MyBooking/MyBooking";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
import "./Dashboard.css";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    return (
        <div>
            <Header></Header>
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="dashboard">
                            <h5>Dashboard</h5>
                            {!admin && <div>
                                <Link to={`${url}`}>
                                    <p className="dashboard-menu"></p>
                                </Link>

                                <Link to={`${url}/pay`}>
                                    <p className="dashboard-menu">Pay</p>
                                </Link>

                                <Link to={`${url}/BookingList`}>
                                    <p className="dashboard-menu">My Orders</p>
                                </Link>

                                <Link to={`${url}/review`}>
                                    <p className="dashboard-menu">Review</p>
                                </Link>
                            </div>}
                            {admin && <div>
                                <Link to={`${url}/manageOrders`}>
                                    <p className="dashboard-menu">Manage Orders</p>
                                </Link>
                                <Link to={`${url}/addProduct`}>
                                    <p className="dashboard-menu">Add Product</p>
                                </Link>
                                <Link to={`${url}/makeAdmin`}>
                                    <p className="dashboard-menu">Make Admin</p>
                                </Link>
                                <Link to={`${url}/manageProducts`}>
                                    <p className="dashboard-menu">Manage Products</p>
                                </Link>
                                <Button onClick={logout} className="logout-btn-user" as={Link} to="/">Logout</Button>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={path}>
                                <MyBooking></MyBooking>
                            </Route>
                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/BookingList`}>
                                <MyBooking></MyBooking>
                            </Route>
                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manageOrders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
