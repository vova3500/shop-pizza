import { pizzasAPI } from "../../api/api";

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export const loadingPizza = (isLoading) => ({
  type: "LOADING_PIZZA",
  payload: isLoading,
});

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
  dispatch(loadingPizza(true));
  let resposne = await pizzasAPI.getPizzas(category, sortBy);
  if (resposne.statusText === "OK") {
    dispatch(setPizzas(resposne.data));
    dispatch(loadingPizza(false));
  }
};
