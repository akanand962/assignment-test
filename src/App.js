import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Login from './components/Login'
import Logout from './components/Logout'

import Dashboard from './components/Dashboard'
import AddEmp from './components/AddEmp';
import EditEmp from './components/EditEmp';


function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
         <Switch>          
           <Route path='/login' exact component={Login}/>
           <Route path='/logout'exact component={Logout}/>
           <Route path='/dashboard' exact component={Dashboard}/>
           <Route path='/add-emp' exact component={AddEmp}/>
           <Route path='/edit-emp/:id'  component={EditEmp}/>



           
         </Switch>
      </Router>
     
    </div>
  );
}

export default App;
