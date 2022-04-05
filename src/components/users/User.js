import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { findByRole } from "@testing-library/react";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
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
    profile: "",
  });
  const {
    firstname,
    lastname,
    designation,
    role,
    email,
    password,
    mobileno,
    DOB,
    gender,
    empid,
    company,
    status,
    resquetoken,
    profile,
  } = user;
  const onInputChange = (e) => {
    console.log([e.target.name], e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    alert("Success");
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  const genderoptions = [
    { value: "", label: "Select Gender" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];
  const designationoptions = [
    { value: "", label: "Select Designation  " },
    { value: "CEO", label: "CEO" },
    { value: "CTO", label: "CTO" },
    { value: "CIO", label: "CIO" },
    { value: "VP of Product Management", label: "VP of Product Management" },
    { value: "Product Manager", label: "Product Manager" },
    { value: "VP of Marketing", label: "VP of Marketing" },
    { value: "VP of Engineering", label: "VP of Engineering" },
    { value: "Chief Architect", label: "Chief Architect" },
    { value: "Software Architect", label: "Software Architect" },
    {
      value: "Engineering Project Manager",
      label: "Engineering Project Manager",
    },
    { value: "Team Lead", label: "Team Lead" },
    {
      value: "Principal Software Engineer",
      label: "Principal Software Engineer",
    },
    { value: "Senior Software Engineer", label: "Senior Software Engineer" },
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "Software Developer", label: "Software Developer" },
    { value: "Junior Software Developer", label: "Junior Software Developer" },
    { value: "Intern Software Developer", label: "Intern Software Developer" },
  ];
  const statusoptions = [
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
                User - {firstname} {lastname}
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
                      name="firstname"
                      value={firstname}
                      readOnly
                    />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group p-2">
                    <font color="red">Last Name *</font>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="lastname"
                      value={lastname}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div className="form-group p-2">
                    <font color="red">Designation *</font>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="designation"
                      value={designation}
                      readOnly
                    />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group p-2">
                    <font color="red">Role *</font>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="role"
                      value={role}
                      readOnly
                    />
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
                      name="email"
                      value={email}
                      readOnly
                    />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group p-2">
                    <font color="red">Password *</font>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="password"
                      value={password}
                      readOnly
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
                      name="mobileno"
                      value={mobileno}
                      readOnly
                    />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group p-2">
                    <font color="red">Date of Birth *</font>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="DOB"
                      value={DOB}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <div className="form-group p-2">
                    <font color="red">Gender *</font>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="gender"
                      value={gender}
                      readOnly
                    />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group p-2">
                    <font color="red">Emp ID *</font>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="empid"
                      value={empid}
                      readOnly
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
                      name="company"
                      value={company}
                      readOnly
                    />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group p-2">
                    <font color="red">Status *</font>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="status"
                      value={status}
                      readOnly
                    />
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
                      name="resquetoken"
                      value={resquetoken}
                      readOnly
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
                      name="profile"
                      value={profile}
                      readOnly
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
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
