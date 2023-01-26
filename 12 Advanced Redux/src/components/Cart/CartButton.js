import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { toggle } from "../../Store/UiSlice";
const CartButton = (props) => {
  const Dispatch = useDispatch();
  const showCardHandler = () => {
    Dispatch(toggle());
  };
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick={showCardHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
