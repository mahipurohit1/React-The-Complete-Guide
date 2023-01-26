import { useState } from "react";

const SimpleInput = (props) => {
  const [enterName, setEnterName] = useState("");
  const [enterNameTouched, setEnterNameTouched] = useState(false);

  const enterNameIsValid = enterName.trim().length !== 0;
  const changeInputHandler = (event) => {
    setEnterName(event.target.value);
  };
  const blurInputHandler = (event) => {
    setEnterNameTouched(true);
  };
  const submitHandler = (event) => {
    setEnterNameTouched(true);
    event.preventDefault();
    if (!enterNameIsValid) {
      return;
    }
    console.log(enterName);

    setEnterName("");
    setEnterNameTouched(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div
        className={`form-control ${
          !enterNameIsValid && enterNameTouched && "invalid"
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enterName}
          onBlur={blurInputHandler}
          onChange={changeInputHandler}
        />
        {!enterNameIsValid && enterNameTouched && (
          <p className="error-text">name is invalid !!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
