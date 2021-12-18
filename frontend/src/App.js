import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from './components/UI/NavBar/NavBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <NavBar />

      </Switch>
    </div>
  );
}

export default App;
