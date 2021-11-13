import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import BookingTwo from './components/BookingTwo/BookingTwo';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import MoreProducts from './components/MoreProducts/MoreProducts/MoreProducts';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/moreProducts">
              <MoreProducts />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking/:productId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/bookingTwo/:productId">
              <BookingTwo></BookingTwo>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
