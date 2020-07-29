import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Header, Home, Cart } from "./components";
import { fetchPizzas } from "./redux/actions/pizzas";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

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
