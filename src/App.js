import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import MoreProducts from './components/MoreProducts/MoreProducts/MoreProducts';
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
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/booking/:productId">
              <Booking></Booking>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
