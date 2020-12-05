import {
  GET_ALL_EMP,
  GET_EMP,
  CREATE_EMP,
  UPDATE_EMP,
  DELETE_EMP,
  EMP_LOGOUT
  } from "../constant/type";
  
  const initialState = {
    empAllData: [],
    empData: null,
    auth:{user:'abcd',password:12345}
  };
  export default   (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_ALL_EMP:
        return {
          ...state,
          empAllData:payload,
        };
      case CREATE_EMP:
        console.log(payload);
        return {
          ...state,
          empAllData: [payload, ...state.empAllData],
        };
      case GET_EMP:
        let arr = state.empAllData.filter((emp)=>emp)
        arr = arr.values()
        // for(let val of arr){
        //   arr = val;
        // }
        return {
          ...state,
          empData:arr,
        };
      case UPDATE_EMP:
        return {
          ...state,
          empAllData: state.empAllData.map((empDataItem) =>
            empDataItem.id == payload.id ? payload : empDataItem
          ),
        };
      case  DELETE_EMP:
        return {
          ...state,
          empAllData: state.empAllData.filter((empDataItem) => empDataItem.id != payload),
        };
      case EMP_LOGOUT:
        return {
          auth:payload
        }
      default:
        return state;
    }
  };