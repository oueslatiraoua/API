import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setListOfUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ul>
      {listOfUser.map((el) => {
        <li>{el}</li>;
      })}
    </ul>
  );
};
