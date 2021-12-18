import { Redirect, Route, Switch , BrowserRouter as Router} from "react-router-dom";
import { CssBaseline } from '@mui/material';
import NavBar from './components/UI/NavBar/NavBar';
import Gallery from "./containers/Gallery/Gallery";
import NewPhoto from "./containers/NewPhoto/NewPhoto";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <NavBar />
        <Route path="/" exact component={Gallery} />
        <Route path="/add_photo" exact component={NewPhoto} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
