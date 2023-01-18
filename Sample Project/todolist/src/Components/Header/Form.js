import React from "react";
import styles from "./Form.module.css";
function Form(props) {
  return (
    <form className={styles.form}>
      <select name="task" id="">
        <option value="all">All</option>
        <option value="inComplete">InComplete</option>
        <option value="complete">Complete</option>
      </select>
    </form>
  );
}

export default Form;
