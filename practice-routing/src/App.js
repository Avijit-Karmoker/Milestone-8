import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import FriendDetail from "./components/FreindDetails/FriendDetail";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about/:id">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
