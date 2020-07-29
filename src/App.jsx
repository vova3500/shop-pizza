import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { Header, Home, Cart } from "./components";
import { setPizzas } from "./redux/actions/pizzas";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/bd.json")
      .then(({ data }) => dispatch(setPizzas(data.pizzas)));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/cart"} component={Cart} />
      </div>
    </div>
  );
}

export default App;
