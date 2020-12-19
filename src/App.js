import React from "react";
import GlobalStyles from "./app/globalStyles";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./app/components";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
    </Router>
  );
}

export default App;
