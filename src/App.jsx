// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
