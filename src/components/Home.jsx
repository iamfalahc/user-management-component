import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const showInfo = (id) =>  navigate(`/info/${id}`);
  const deleteUser = (id) => {setUsers(users.filter((user)=>user.id!==id))};

  useEffect(() => {  axios.get("https://jsonplaceholder.typicode.com/users").then((Response) => {
    try {
      setUsers(Response.data);
    } catch (error) {
      console.log(error);
    }
  });},[]);


  return (
    <div className="container">
     {users?(<><h1>User list</h1>
      <input type="text" placeholder="Search by name, email or phone " />
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
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
