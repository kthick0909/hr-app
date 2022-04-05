import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../layout/Navbar'
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
    console.log(result.data)
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    alert("User deleted successfully");
    loadUsers();
  };
  return (
    <div>
        <Navbar />
     <div class="height-100 bg-light">
        <div class="row">
            <div class="col">
                <h4 class="p-2">Users</h4>
            </div>
            <div class="col">
            <Link class="btn btn-primary float-end" to="/users/add"> Add User</Link>
            </div>
        </div>
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Status</th>
            <th scope="col">Image</th>
            <th scope="col" colspan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{user.firstname} {user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.mobileno}</td>
            <td>{user.status}</td>
            <td><img src={user.profile} width="50" height="40"/></td>
            <td>
                <a href={`/users/edit/${user.id}`}>
                    <i class='bx bx-edit-alt bx-sm'></i>
                </a>
            </td>
            <td>
                <a href={`/users/${user.id}`}>
                    <i class='bx bxl-trip-advisor bx-sm' ></i>
                </a>
                </td>
            <td>
                <a href="#" onClick={() => deleteUser(user.id)}>
                    <i class='bx bx-trash-alt bx-sm'></i>
                </a>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
  </div>
</div>
  )
}

export default Home