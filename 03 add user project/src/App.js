import React, { useState } from "react";
import AddUser from "./Components/USER/AddUser";
import UserList from "./Components/USER/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const userData = function (data) {
    setUserList((prevState) => [data, ...prevState]);
  };
  return (
    <React.Fragment>
      <AddUser onAddUserData={userData} />
      <UserList userData={userList} />
    </React.Fragment>
  );
}

export default App;
