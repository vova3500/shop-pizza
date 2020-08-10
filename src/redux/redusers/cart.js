const initialState = {};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS": {
      return {
        ...state,
        items: action.payload,
      };
    }
    case "LOADING_PIZZA": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
