import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const showInfo = () => {};
  const deleteUser = (id) => {};

  useEffect(() => {});
  axios.get("https://jsonplaceholder.typicode.com/users").then((Response) => {
    try {
      setUsers(Response.data);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="container">
     {users?(<><h1>User list</h1>
      <input type="text" placeholder="Search by name, email or phone " />
      <ul>
        {users.map((user, index) => {
          return (
            <li>
              <span>{user.name}</span>
              <div className="buttons">
                <button onClick={() => showInfo(user.id)}>Info</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul></>):(<span>loading</span>)}
    </div>
  );
};

export default Home;
