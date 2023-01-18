import React from "react";
const DataContext = React.createContext({
  items: [],
  addItem: () => {},
  HideModalHandler: () => {},
  deleteitem: () => {},
  ShowModalHandlerWithData: () => {},
});

export default DataContext;
