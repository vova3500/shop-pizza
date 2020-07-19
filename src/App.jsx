import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import { Header, Home, Cart } from "./components";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/bd.json")
      .then(({ data }) => setPizzas(data.pizzas));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path={"/"} render={() => <Home pizzas={pizzas} />} />
        <Route exact path={"/cart"} component={Cart} />
      </div>
    </div>
  );
}

export default App;
