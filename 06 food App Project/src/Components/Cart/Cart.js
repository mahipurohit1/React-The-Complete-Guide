import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

function Cart(props) {
  const CartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "mahi", amount: 2, price: 12.96 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onCloseCart}>
      {CartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onCloseCart} className={styles["button--alt"]}>
          close
        </button>
        <button className={styles.button}>order</button>
      </div>
    </Modal>
  );
}

export default Cart;
