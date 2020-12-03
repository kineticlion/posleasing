import './App.css';
import Login from './components/Login/Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
     </Route>
  </Router>
  )
}

export default App;
