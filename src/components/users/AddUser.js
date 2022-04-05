import React, { useState } from "react";
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import Navbar from '../layout/Navbar'


const AddUser = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    designation: "",
    role: "",
    email: "",
    password: "",
    mobileno: "",
    DOB: "",
    gender: "",
    empid: "",
    company: "",
    status: "",
    resquetoken: "",
    profile: ""
  });

  const { firstname, lastname, designation, role, email, password, mobileno, DOB, gender, empid, company, status, resquetoken, profile } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users/", user);
    alert("User added successfully");
    history.push("/");
  };

  const genderoptions = [
    { value: "", label: "Select Gender" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];
  const designationoptions = [
    {value: "", label: "Select Designation  "},
    {value: "CEO", label: "CEO"},
    {value: "CTO", label: "CTO"},
    {value: "CIO", label: "CIO"},
    {value: "VP of Product Management", label: "VP of Product Management"},
    {value: "Product Manager", label: "Product Manager"},
    {value: "VP of Marketing", label: "VP of Marketing"},
    {value: "VP of Engineering", label: "VP of Engineering"},
    {value: "Chief Architect", label: "Chief Architect"},
    {value: "Software Architect", label: "Software Architect"},
    {value: "Engineering Project Manager", label: "Engineering Project Manager"},
    {value: "Team Lead", label: "Team Lead"},
    {value: "Principal Software Engineer", label: "Principal Software Engineer"},
    {value: "Senior Software Engineer", label: "Senior Software Engineer"},
    {value: "Software Engineer", label: "Software Engineer"},
    {value: "Software Developer", label: "Software Developer"},
    {value: "Junior Software Developer", label: "Junior Software Developer"},
    {value: "Intern Software Developer", label: "Intern Software Developer"}
  ]
  const statusoptions = [
    { value: "", label: "Select Status" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const roleoptions = [
    { value: "", label: "Select Role" },
    { value: "Admin", label: "Admin" },
    { value: "User", label: "User" },
  ];

  return (
    <>
    <Navbar />
    <div className="container p-5">
      <div className="w-75 mx-auto shadow p-5">
        <div class="row">
          <div class="col">
            <h4 className="text-center mb-2">
              Add User 
            </h4>
          </div>
          <div class="col">
            <Link class="btn btn-primary float-end" to="/">
              Back to Home
            </Link>
          </div>
        </div>
        <hr></hr>
        <form onSubmit={(e) => onSubmit(e)}>
          <div class="container">
            <div class="row">
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">First Name *</font>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter First Name"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Last Name *</font>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Designation *</font>
                  <select
                    name="designation"
                    onChange={(e) => onInputChange(e)}
                    className="form-control form-control-lg"
                    required
                  >
                    {designationoptions.map((option) => (
                      <option
                        value={option.value}
                        selected={designation === option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Role *</font>
                  <select
                    name="role"
                    onChange={(e) => onInputChange(e)}
                    className="form-control form-control-lg"
                    required
                  >
                    {roleoptions.map((option) => (
                      <option
                        value={option.value}
                        selected={role === option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Email *</font>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Password *</font>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Mobile No. *</font>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Enter Mobileno"
                    name="mobileno"
                    value={mobileno}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Date of Birth *</font>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter D.O.B"
                    name="DOB"
                    value={DOB}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Gender *</font>
                  <select
                    name="gender"
                    onChange={(e) => onInputChange(e)}
                    className="form-control form-control-lg"
                    required
                  >
                    {genderoptions.map((option) => (
                      <option
                        value={option.value}
                        selected={gender === option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Emp ID *</font>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Emp ID"
                    name="empid"
                    value={empid}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Company Name *</font>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Company Name"
                    name="company"
                    value={company}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Status *</font>
                  <select
                    name="status"
                    onChange={(e) => onInputChange(e)}
                    className="form-control form-control-lg"
                    required
                  >
                    {statusoptions.map((option) => (
                      <option
                        value={option.value}
                        selected={status === option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Resque Time Token *</font>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Enter Resque Time Token"
                    name="resquetoken"
                    value={resquetoken}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div className="form-group p-2">
                  <font color="red">Profile Picture URL*</font>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter Profile Picture URL"
                    name="profile"
                    value={profile}
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div className="form-group p-2">
                  <img
                    src={profile}
                    alt="No Image with URL"
                    width="150px"
                    height="150px"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <button className="btn btn-primary btn-lg btn-block">Submit</button>
        </form>
      </div>
    </div>
  </>
);
};

export default AddUser;
