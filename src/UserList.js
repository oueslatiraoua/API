import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{
        backgroundColor: "LightBlue",
        opacity: "0.8",
        border: "5px solid",
        borderColor: "MediumBlue",
      }}
    >
      <center style={{ color: "MediumBlue" }}>
        <h2>LIST OF USERS</h2>
      </center>
      <ul>
        {listOfUser.map((el) => (
          <>
            <span style={{ padding: "5px", fontSize: "30px" }}>
              Liste n°:
              {el.id}
            </span>
            <li style={{ padding: "5px" }}>
              {" "}
              <div style={{ fontSize: "20px" }}> name :</div>
              {el.name}{" "}
            </li>
            <li style={{ padding: "5px" }}>
              <div style={{ fontSize: "20px" }}> username :</div>
              {el.username}
            </li>{" "}
            <li style={{ padding: "5px" }}>
              <div style={{ fontSize: "20px" }}> email :</div>
              {el.email}
            </li>{" "}
            <li style={{ padding: "5px" }}>
              {" "}
              <div style={{ fontSize: "20px" }}> phone number :</div>
              {el.phone}
            </li>
            <li style={{ padding: "5px", marginBottom: "30px" }}>
              {" "}
              <div style={{ fontSize: "20px" }}> website :</div>
              {el.website}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};
