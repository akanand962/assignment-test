import React, { useState } from "react";
import { useDispatch } from "react-redux";
 import { createEmployee } from "../store/action/empAction";
 import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddEmp = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const craeteEmp = (e) => {
    e.preventDefault();

    const new_emp = {
      id: shortid.generate(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    console.log(new_emp)
     dispatch(createEmployee(new_emp));
    history.push("/dashboard");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteEmp(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your First Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Emplyee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmp;