import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styled from "./AddUser.module.css";
import Wrapper from "../HELPER/Wrapper";

const AddUser = function (props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const submitHandler = function (events) {
    events.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      setError({
        title: " Input Error",
        message: "please !! Enter Valid Input ",
      });
      return;
    }
    const userData = {
      key: Math.random().toString(),
      name: enteredUserName,
      age: enteredAge,
    };

    props.onAddUserData(userData);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const usernameHandler = function (events) {
    setEnteredUserName(events.target.value);
  };
  const ageHandler = function (events) {
    setEnteredAge(events.target.value);
  };
  const removePopup = function () {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={removePopup}
        />
      )}

      <Card className={styled.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageHandler}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
