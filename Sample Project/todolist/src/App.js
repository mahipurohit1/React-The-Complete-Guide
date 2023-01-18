import styles from "./App.module.css";
import Container from "./Components/UI/Container";
import Header from "./Components/Header/Header";
import ListItem from "./Components/ListItem/ListItem";
import Modal from "./Components/UI/Modal";
import { useState } from "react";
import DataContext from "./Components/Store/DataContext";

function App() {
  const [showModal, setShowModal] = useState(false);
  const dataInLocalStorage = JSON.parse(localStorage.getItem("items"));

  const [items, setItems] = useState(
    dataInLocalStorage?.length > 0 ? dataInLocalStorage : []
  );

  const ShowModalHandler = () => {
    setShowModal(true);
  };
  const ShowModalHandlerWithData = (id) => {
    const selectedData = items.filter((item) => {
      return item.id === id;
    });

    setShowModal(true);
  };
  const HideModalHandler = () => {
    setShowModal(false);
  };
  const addItem = function (newItem) {
    setItems([newItem, ...items]);
    localStorage.setItem("items", JSON.stringify([newItem, ...items]));
  };

  const deleteitem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    localStorage.setItem(
      "items",
      JSON.stringify(items.filter((item) => item.id !== id))
    );
  };
  // useEffect(() => {
  //   localStorage.setItem("item", JSON.stringify(items));
  // }, [items]);

  return (
    <DataContext.Provider
      value={{
        items,
        addItem,
        HideModalHandler,
        deleteitem,
        ShowModalHandlerWithData,
      }}
    >
      {showModal && <Modal onHideModal={HideModalHandler} />}
      <Container>
        <h1 className={styles.header}>Todo List</h1>
        <Header onShowModal={ShowModalHandler}></Header>
        <ListItem></ListItem>
      </Container>
    </DataContext.Provider>
  );
}

export default App;

//https://wc-react-todo-app.netlify.app/
