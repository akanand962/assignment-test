import React ,{useEffect,useState} from 'react'

import {getPosts} from '../store/action/empAction'

 import {useSelector,useDispatch} from 'react-redux'
 import EmpTable from '../components/EmpTable'

export default function Employ() {
      const allData = useSelector(state=>state.allEmpData.empAllData)
      console.log(allData)

      const dispatch = useDispatch()

      useEffect(()=>{
          dispatch(getPosts())
          console.log(getPosts())
      },[])

    return (
        <div style={{marginTop:'50px' ,width:'600px'}}>
   <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">
        <input type='checkbox'/>
      </th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Profile Pic</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
   {allData.map((allData )=>(
     <EmpTable  allData={allData}/>
   ))}
   
  </tbody>
</table>
        </div>

       
    )
}
