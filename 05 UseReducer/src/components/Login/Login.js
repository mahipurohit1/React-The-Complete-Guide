import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const EmailReducer = function (state, actions) {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, IsValid: actions.val.includes("@") };
  }
  if (actions.type === "BLUR_INPUT") {
    return { value: state.value, IsValid: state.value.includes("@") };
  }
  return { value: "", IsValid: false };
};
const PasswordReducer = function (state, actions) {
  if (actions.type === "USER_INPUT") {
    return { value: actions.val, IsValid: actions.val.trim().length > 6 };
  }
  if (actions.type === "BLUR_INPUT") {
    return { value: state.value, IsValid: state.value.trim().length > 6 };
  }
  return { value: "", IsValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [enteredEmail, despatchEmail] = useReducer(EmailReducer, {
    value: "",
    IsValid: null,
  });
  const [enteredPassword, despatchPassword] = useReducer(PasswordReducer, {
    value: "",
    IsValid: null,
  });

  const { IsValid: emailIsValid } = enteredEmail;
  const { IsValid: passwordIsValid } = enteredPassword;
  // useEffect(() => {
  //   console.log("EFFECT RUNNING");

  //   return () => {
  //     console.log("EFFECT CLEANUP");
  //   };
  // }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    despatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(enteredEmail.IsValid && enteredPassword.IsValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    despatchPassword({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(enteredEmail.IsValid && enteredPassword.IsValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    despatchEmail({ type: "BLUR_INPUT" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    despatchPassword({ type: "BLUR_INPUT" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail.value, enteredPassword.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            enteredEmail.IsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            enteredPassword.IsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
