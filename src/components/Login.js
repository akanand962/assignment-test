import React,{useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {getPosts} from '../store/action/empAction'
import {useHistory} from 'react-router-dom'

export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
     const allData = useSelector(state=>state.allEmpData.auth)
     console.log(allData,'pass')
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
   const handleSubmit = (e)=>{
        e.preventDefault()
        if(user==allData.user && password==allData.password){
        
          return history.push('/dashboard')
        }
        else{
          alert('Wrong User Id And Pass')
        }

   }




   useEffect(()=>{
    dispatch(getPosts())
 
   },[])

    return (
        <div className='login-div'>
            <h2>Login</h2>
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"  onChange={(e)=>setUser(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" >Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
        </div>
    )
}
