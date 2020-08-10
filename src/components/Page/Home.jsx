import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../";

import { setCategory, setSortBy } from "../../redux/actions/filters";
import { fetchPizzas } from "../../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "rating" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoading = useSelector(({ pizzas }) => pizzas.isLoading);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy, dispatch]);

  const onSelectCategory = useCallback(
    (categoryId) => dispatch(setCategory(categoryId)),
    [dispatch]
  );

  const onSelectSortBy = useCallback((type) => dispatch(setSortBy(type)), [
    dispatch,
  ]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          activCategory={category}
          onSelectCategory={onSelectCategory}
        />
        <SortPopup
          items={sortItems}
          activSortBy={sortBy}
          onSelectSortBy={onSelectSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {!isLoading
          ? items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
