import React from "react";
const EditContext = React.createContext({
  editHandler: () => {},
  isEditable: null,
});
export default EditContext;
