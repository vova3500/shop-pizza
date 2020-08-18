export const addPizzaCard = (pizza) => ({
  type: "ADD_PIZZA_CARD",
  payload: pizza,
});

export const clearCard = () => ({
  type: "CLEAR_CARD",
});

export const deletePizzaGroup = (idGroup) => ({
  type: "DELETE_PIZZA_GROUP",
  payload: idGroup,
});

export const minusCardPizza = (pizza) => ({
  type: "MINUS_CARD_PIZZA",
  payload: pizza,
});

export const plusCardPizza = (pizza) => ({
  type: "PLUS_CARD_PIZZA",
  payload: pizza,
});
