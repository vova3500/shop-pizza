const addPizzaCard = "ADD_PIZZA_CARD";
const clearCard = "CLEAR_CARD";
const deletePizzaGroup = "DELETE_PIZZA_GROUP";

const initialState = {
  items: {},
  totalPrise: 0,
  totalCount: 0,
};

const getTotalPrise = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case addPizzaCard: {
      const carrentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: carrentPizzaItems,
          totalPrise: getTotalPrise(carrentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPurchases = [].concat.apply([], Object.values(items));
      const totalPrise = getTotalPrise(allPurchases);

      return {
        ...state,
        items: newItems,
        totalCount: allPurchases.length,
        totalPrise,
      };
    }

    case clearCard: {
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrise: 0,
      };
    }

    case deletePizzaGroup: {
      const newItems = {
        ...state.items,
      };

      const currentTotalCount = newItems[action.payload].items.length;
      const currentTotalPrise = newItems[action.payload].totalPrise;

      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - currentTotalCount,
        totalPrise: state.totalPrise - currentTotalPrise,
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
