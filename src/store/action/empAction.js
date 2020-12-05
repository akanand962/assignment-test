import {
  GET_ALL_EMP,
  GET_EMP,
  CREATE_EMP,
  UPDATE_EMP,
  DELETE_EMP,
  EMP_LOGOUT
  } from "../constant/type";
  import axios from "axios";
import Logout from "../../components/Logout";
  
  // get all posts
  export const getPosts = () => async (dispatch) => {
    const result = await axios.get("https://api.github.com/users");
    dispatch({
      type:  GET_ALL_EMP,
      payload: result.data,
    });
  };
  
  // // get a post
  // export const getPost = (id) => async (dispatch) => {
  //   const result = await axios.get(
  //     `https://api.github.com/users/${id}`
  //   );
  
  //   dispatch({
  //     type: GET_EMP,
  //     payload: result.data,
  //   });
  // };
  
  // create a Employee
  // export const createEmployee = (data) => async (dispatch) => {
  //   const result = await axios.post(
  //     "https://api.github.com/users",
  //     data
  //   );
  
  //   dispatch({
  //     type:CREATE_EMP,
  //     payload: result.data,
  //   });
  // };

  export const createEmployee = (data)=>{
    return{
      type:CREATE_EMP,
      payload:data
    }
  }
//Get Single Emp Data
  export const getEmp = (id)=>({
    type:GET_EMP,
    payload:id
  })
  
  // update a Employee
  export const updateEmp = (post) => async (dispatch) => {
    const result = await axios.put(
      `https://api.github.com/users/${post.id}`,
      post
    );
    dispatch({
      type: UPDATE_EMP,
      payload: result.data,
    });
  };

 
  
  // delete a Employee
  export const deletePost = (id) => async (dispatch) => {
    await axios.delete(`https://api.github.com/users/${id}`);
    dispatch({
      type:  DELETE_EMP,
      payload: id,
    });
  };


  export const logout = ()=>({
    type:EMP_LOGOUT,
    payload:null
  })