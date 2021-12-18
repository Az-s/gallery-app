import React from 'react';
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { useSelector } from "react-redux";
import NavBar from './components/UI/NavBar/NavBar';
import Gallery from "./containers/Gallery/Gallery";
import MyPhotos from "./containers/MyPhotos/MyPhotos";
import UserPhotos from './containers/UserPhotos/UserPhotos';
import NewPhoto from "./containers/NewPhoto/NewPhoto";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import './App.css';

const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  return isAllowed ?
    <Route {...props} /> :
    <Redirect to={redirectTo} />;
};

const App = () => {
  const user = useSelector(state => state.users.user);

  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <NavBar />
        <Route path="/" exact component={Gallery} />
        <ProtectedRoute
          path="/add_photo"
          component={NewPhoto}
          isAllowed={user}
          redirectTo="/login"
        />
        <Route path="/my_photos" exact component={MyPhotos} />
        <Route path="/user_photos/:id" exact component={UserPhotos} />
        {/* <Route path="/add_photo" exact component={NewPhoto} /> */}
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
