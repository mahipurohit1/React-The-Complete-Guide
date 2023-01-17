import styles from "./App.module.css";
import Container from "./Components/UI/Container";
import Header from "./Components/Header/Header";
function App() {
  return (
    <Container>
      <h1 className={styles.header}>Todo List</h1>
      <Header></Header>
    </Container>
  );
}

export default App;

//https://wc-react-todo-app.netlify.app/
