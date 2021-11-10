import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
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
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
