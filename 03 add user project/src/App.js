import React, { useState } from "react";
import AddUser from "./Components/USER/AddUser";
import UserList from "./Components/USER/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const userData = function (data) {
    setUserList((prevState) => [data, ...prevState]);
  };
  return (
    <div>
      <AddUser onAddUserData={userData} />
      <UserList userData={userList} />
    </div>
  );
}

export default App;
