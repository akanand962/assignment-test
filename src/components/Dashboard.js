import React,{useState} from 'react'
import Employ from './Employ'
import {Link} from 'react-router-dom'
import {logout} from '../store/action/empAction'
import {useHistory} from 'react-router-dom'
 
export default function Dashboard() {
  const history = useHistory()
  const [showData,setShowData] = useState(false)

  const displayData = ()=>{
    setShowData(!showData)
  }

  const logout = ()=>{
    console.log('logout')
     if(logout()){
       return history.push('/login')
     }
  }
    return (
        <div>
            <h1>Welcome to Dashbord</h1>
            <div class="container">
  <div class="row">
  <div class="col-sm">
      <button className='btn btn-success'>
      <Link to='/add-emp' className='text-white'>Add Employee</Link>
      </button>
    </div>
    <div className="col-sm">
      <button className='btn btn-success' onClick={displayData}>Show  Employee Data</button>
    </div>
    <div class="col-sm">
    <select className='btn btn-success' value="Emp Setting">
  <option value="Setting">Setting</option>
  <option value="emp info" onChange = {logout} >LogOut</option>
  <option value="emp info">Emp Information</option>


</select>


    </div>
  
  </div>
</div>
{showData? <Employ/>:null}
    
        </div>
    )
}
