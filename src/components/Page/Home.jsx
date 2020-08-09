import React, { useCallback,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock,PizzaLoadingBlock } from "../";

import { setCategory } from "../../redux/actions/filters";
import { fetchPizzas } from "../../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "pupular" },
  { name: "цене", type: "prise" },
  { name: "алфавиту", type: "alphabet" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);

  useEffect(() => {
    if(!items.length){
      dispatch(fetchPizzas());
    }
  }, []);

  const onSelectCategory = useCallback(
    (categoryId) => dispatch(setCategory(categoryId)),
    []
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} onClickItem={onSelectCategory} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoading ? items.map((pizza) => (
          <PizzaBlock key={pizza.id} {...pizza} />
        )): Array(10).fill(<PizzaLoadingBlock/>)}
      </div>
    </div>
  );
};

export default Home;
