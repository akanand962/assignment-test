import React from 'react'
import {Link} from 'react-router-dom'

export default function EmpTable(props) {
      console.log(props.allData)
      const {allData} = props
    return (
        
             <tr>
    <th scope="row">
     <input type='checkbox'/>
    </th>
    <td>{allData.login}</td>
      <td>{allData.login}</td>
    <td><img src={allData.avatar_url} width='50' height='50' /></td>
    <td className="actions">
        <Link to={`edit-emp/${allData.id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          className="material-icons  text-danger"
        //   onClick={() => dispatch(deleteContact(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>  
      
    )
}
