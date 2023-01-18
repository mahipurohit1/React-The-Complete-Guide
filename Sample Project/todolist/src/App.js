import styles from "./App.module.css";
import Container from "./Components/UI/Container";
import Header from "./Components/Header/Header";
import ListItem from "./Components/ListItem/ListItem";
import Modal from "./Components/UI/Modal";
import { useState } from "react";
import DataContext from "./Components/Store/DataContext";
import UpdateModal from "./Components/UI/UpdateModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const dataInLocalStorage = JSON.parse(localStorage.getItem("items"));

  const [items, setItems] = useState(
    dataInLocalStorage?.length > 0 ? dataInLocalStorage : []
  );

  const ShowModalHandler = () => {
    setShowModal(true);
  };

  const ShowUpdateModalHandler = (item) => {
    setShowUpdateModal(true);
    setCurrentItem(item);
  };
  const HideUpdateModalHandler = () => {
    setShowUpdateModal(false);
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

  const updateItem = (newItem, id) => {
    const updatedItems = items.slice();
    const updatedItem = updatedItems.find((item) => item.id === id);
    if (!updatedItem) return;
    updatedItem.name = newItem.name;
    updatedItem.status = newItem.status;
    console.log(updatedItem);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
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
        ShowUpdateModalHandler,
        HideUpdateModalHandler,
        updateItem,
      }}
    >
      {showModal && <Modal onHideModal={HideModalHandler} />}
      {showUpdateModal && (
        <UpdateModal
          onHideUpdateModal={HideUpdateModalHandler}
          Data={currentItem}
        />
      )}

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
