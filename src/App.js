import React, { useState } from "react";
import GlobalStyles from "./app/globalStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import Footer from "./app/components/Footer";
import StyledButtonGenerator from "./app/containers/StyledButtonGenerator";
import Home from "./app/containers/Home";
import { Navbar } from "./app/components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/app">
          <StyledButtonGenerator />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
