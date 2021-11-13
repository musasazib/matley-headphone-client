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
                <div className="row" >
                    <div className="col-md-3 ">
                        <div className="dashboard mb-5 pb-5">
                            <h5>Dashboard</h5>
                            {!admin && <div>
                                <Link to={`${url}`}>
                                    <p className="dashboard-menu"></p>
                                </Link>

                                <Link to={`${url}/pay`}>
                                    <Button className="dashboard-menu">Pay</Button>
                                </Link>
                                <br />
                                <Link to={`${url}/BookingList`}>
                                    <Button className="dashboard-menu">My Orders</Button>
                                </Link>
                                <br />
                                <Link to={`${url}/review`}>
                                    <Button className="dashboard-menu">Review</Button>
                                </Link>
                                <br />
                            </div>}
                            {admin && <div>
                                <Link to={`${url}/manageOrders`}>
                                    <Button className="dashboard-menu">Manage Orders</Button>
                                </Link>
                                <br />
                                <Link to={`${url}/addProduct`}>
                                    <Button className="dashboard-menu">Add Product</Button>
                                </Link>
                                <br />
                                <Link to={`${url}/makeAdmin`}>
                                    <Button className="dashboard-menu">Make Admin</Button>
                                </Link>
                                <br />
                                <Link to={`${url}/manageProducts`}>
                                    <Button className="dashboard-menu">Manage Products</Button>
                                </Link>
                            </div>
                            }
                            <br />
                            <hr />
                            <Link to="/home">
                                <Button className="logout-btn-user mt-5">Back To Home</Button>
                            </Link>
                            <br />
                            <Button onClick={logout} className="logout-btn-user mt-2" as={Link} to="/">Logout</Button>
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
