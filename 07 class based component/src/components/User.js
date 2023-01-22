import react from "react";
import classes from "./User.module.css";

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

class User extends react.Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
export default User;
