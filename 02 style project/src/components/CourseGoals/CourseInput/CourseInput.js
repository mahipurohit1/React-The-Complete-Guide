import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
// import styled from "styled-components";
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.InValid ? "red" : "black")};
//   }
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.InValid ? "red" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   // &.inValid input {
//   //   border: 1px solid red;
//   //   background: #c57166;
//   // }
//   // &.inValid label {
//   //   color: red;
//   // }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [IsValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      props.onAddGoal(enteredValue);
      setEnteredValue(" ");
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${
          !IsValid ? styles["inValid"] : " "
        }`}
      >
        {/* <div className="form-control"> */}
        {/* <FormControl className={!IsValid ? "inValid" : ""}> */}
        {/* <FormControl InValid={!IsValid}> */}
        <label
        // style={{
        //   color: !IsValid ? "red" : "black",
        // }}
        >
          Course Goal
        </label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
        {/* </FormControl> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
