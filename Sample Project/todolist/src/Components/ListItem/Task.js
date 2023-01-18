import React, { useContext } from "react";
import style from "./Task.module.css";
import DataContext from "../Store/DataContext";

function Task() {
  const data = useContext(DataContext);
  
  const TaskItem = (
    <ul className={style["list-ul"]}>
      {data.items.map((ele) => (
        <li className={style["list-li"]} key={ele.id}>
          {ele.name}
        </li>
      ))}
    </ul>
  );
  return <>{TaskItem}</>;
}

export default Task;
