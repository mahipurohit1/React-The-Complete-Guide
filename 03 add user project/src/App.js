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

//create portal example :-
// import { useState } from "react";
// import Modal from "./Modal";
// function App() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const openModalHandler = () => {
//     setModalOpen(true);
//   };
//   const closeModalHandler = () => {
//     setModalOpen(false);
//   };
//   return (
//     <>
//       {modalOpen && <Modal onClose={closeModalHandler} />}
//       <button onClick={openModalHandler}>open modal</button>
//     </>
//   );
// }
// export default App;

// import { useEffect } from "react";
// import { useRef } from "react";
// function App() {
//   const inputRef = useRef();
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);
//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     console.log(inputRef.current.value);
//   };
//   return (
//     <form onSubmit={formSubmitHandler}>
//       <input type="text" name="" id="" ref={inputRef} />
//       <button>save</button>
//     </form>
//   );
// }
// export default App;
