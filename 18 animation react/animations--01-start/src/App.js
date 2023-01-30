import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalShow: false, isToggle: false };
  }
  showModalHandler() {
    this.setState({ isModalShow: true });
  }
  closeModalHandler() {
    this.setState({ isModalShow: false });
  }
  toggleHandler() {
    this.setState((prevState) => {
      return {
        ...prevState,
        isToggle: !prevState.isToggle,
      };
    });
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.toggleHandler.bind(this)}>
          Toggle
        </button>
        <Transition
          in={this.state.isToggle}
          duration={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <div
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: "purple",
                  margin: "20px auto",
                  transition: "all 0.3s ease",
                  opacity: state === "exited" ? 0 : 1,
                }}
              ></div>
            );
          }}
        </Transition>

        <Transition
          in={this.state.isModalShow}
          mountOnEnter
          unmountOnExit
          duration={300}
        >
          {(state) => {
            return (
              <Modal show={state} closed={this.closeModalHandler.bind(this)} />
            );
          }}
        </Transition>

        {this.state.isModalShow && <Backdrop show={this.state.isModalShow} />}
        <br />
        <br />
        <button className="Button" onClick={this.showModalHandler.bind(this)}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
