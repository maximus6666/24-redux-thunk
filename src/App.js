import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Users } from './pages/Users';
import { AddUsers } from './pages/AddUsers';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink 
            activeClassName="active-page" 
            className="nav-link" to="/users"
          >Users</NavLink>
          <NavLink 
            activeClassName="active-page" 
            className="nav-link" 
            to="/add-user"
          >Add User</NavLink>
        </nav>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/add-user">
            <AddUsers/>
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
