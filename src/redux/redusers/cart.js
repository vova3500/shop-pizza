const addPizzaCard = "ADD_PIZZA_CARD";

const initialState = {
  items: {},
  totalPrise: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case addPizzaCard: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      let allPurchases = [].concat.apply([], Object.values(newItems));

      return {
        ...state,
        items: newItems,
        totalCount: allPurchases.length,
        totalPrise: allPurchases.reduce((sum, obj) => obj.price + sum, 0),
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
