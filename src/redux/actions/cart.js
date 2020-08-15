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
