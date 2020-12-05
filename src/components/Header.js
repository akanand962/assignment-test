import React ,{useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import  axios from 'axios'

export default function Header() {
  const history = useHistory()
   
   useEffect(()=>{
      history.push('/login')
   },[])
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
       
        <Link className="nav-link"  to='/login'>Login</Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link"  to='/logut'>Add Emp</Link>
      </li>
     
    </ul>
  </div>
</nav>

        </div>
    )
}
