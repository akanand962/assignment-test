import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmp, updateEmp ,getPosts } from "../store/action/empAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditEmp = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.allEmpData.empData);
    console.log(allData)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (allData != null) {
      setName(allData.name);
      setPhone(allData.phone);
      setEmail(allData.email);
    }
    dispatch(getPosts())
    dispatch(getEmp(id));
   
  },[]);

  const onUpdateEmp = (e) => {
    e.preventDefault();

    const update_emp = Object.assign(allData, {
      name: name,
      phone: phone,
      email: email,
    });

    dispatch(updateEmp(update_emp));
    history.push("/")
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Update Employee</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateEmp(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmp;