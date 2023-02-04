import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
// import { useReducer } from "react";
// import AddTask from "./AddTask.js";
// import TaskList from "./TaskList.js";

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case "added": {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case "changed": {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case "deleted": {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//   function handleAddTask(text) {
//     dispatch({
//       type: "added",
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: "changed",
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: "deleted",
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// let nextId = 3;
// var initialTasks = [
//   { id: 0, text: "Visit Kafka Museum", done: true },
//   { id: 1, text: "Watch a puppet show", done: false },
//   { id: 2, text: "Lennon Wall pic", done: false },
// ];

// import { useReducer } from "react";
// const initialState = {
//   value: 0,
// };
// const reducer = (state, action) => {
//   if (action.type === "INCREMENT") {
//     return { value: state.value + 1 };
//   }
//   return state;
// };
// function App() {
//   const [initialValue, dispatch] = useReducer(reducer, initialState);
//   const incHandler = () => {
//     dispatch({ type: "INCREMENT" });
//   };

//   return (
//     <>
//       <p>value : {initialValue.value}</p>
//       <button onClick={incHandler}>click +</button>
//     </>
//   );
// }
// export default App;
