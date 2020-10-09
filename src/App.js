import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';


export const UserContext = createContext()



function App() {

  // const [activites, setActivities] = useState([])
  const [signedInUser, setSignedInUser] = useState({})

  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/events">
            <Dashboard />
          </Route>
          <PrivateRoute path="/register/:key">
            <Register />
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
