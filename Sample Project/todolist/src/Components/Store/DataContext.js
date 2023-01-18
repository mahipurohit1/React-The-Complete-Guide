import React from "react";
const DataContext = React.createContext({
  items: [],
  addItem: () => {},
  HideModalHandler: () => {},
});

export default DataContext;
