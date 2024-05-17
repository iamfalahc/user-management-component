import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Info = () => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("id");

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userId]);

  return (
    <div>
      <h1>User Info</h1>
      <ul>
        <li>Name: {data.name}</li>
        <li>Email: {data.email}</li>
        <li>Phone: {data.phone}</li>
        {/* Add more user info as needed */}
      </ul>
    </div>
  );
};

export default Info;
