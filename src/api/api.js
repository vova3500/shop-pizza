import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const pizzasAPI = {
  getPizzas(category, sortBy) {
    return instance.get(
      `pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${sortBy}&_order=desc`
    );
  },
};
