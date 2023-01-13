import React from "react";
import Card from "../UI/Card";
import styled from "./UserList.module.css";

const UserList = function (props) {
  return (
    <Card className={styled.users}>
      <ul>
        {props.userData.map(function (data) {
          return (
            <li key={data.key}>
              {data.name} {data.age} years old
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UserList;
