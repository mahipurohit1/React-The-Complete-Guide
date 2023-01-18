import React from "react";
const DataContext = React.createContext({
  items: [],
  addItem: () => {},
  HideModalHandler: () => {},
  deleteitem: () => {},
  ShowUpdateModalHandler: () => {},
  HideUpdateModalHandler: () => {},
});

export default DataContext;
