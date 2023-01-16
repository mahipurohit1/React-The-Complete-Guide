import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styled from "./AddUser.module.css";
import Wrapper from "../HELPER/Wrapper";

const AddUser = function (props) {
  const enteredNameInput = useRef();

  const enteredUserAgeInput = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const submitHandler = function (events) {
    events.preventDefault();
    const enteredName = enteredNameInput.current.value;
    const enteredUserAge = enteredUserAgeInput.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      +enteredUserAge < 1
    ) {
      setError({
        title: " Input Error",
        message: "please !! Enter Valid Input ",
      });
      return;
    }
    const userData = {
      key: Math.random().toString(),
      name: enteredName,
      age: enteredUserAge,
    };

    props.onAddUserData(userData);

    enteredNameInput.current.value = "";
    enteredUserAgeInput.current.value = "";
    // setEnteredUserName("");
    // setEnteredAge("");
  };
  // const usernameHandler = function (events) {
  //   setEnteredUserName(events.target.value);
  // };
  // const ageHandler = function (events) {
  //   setEnteredAge(events.target.value);
  // };
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
            // value={enteredUserName}
            // onChange={usernameHandler}
            ref={enteredNameInput}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            type="number"
            id="age"
            // value={enteredAge}
            // onChange={ageHandler}
            ref={enteredUserAgeInput}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
