const setPizza = "SET_PIZZAS";
const loadingPizza = "LOADING_PIZZA";

const initialState = {
  items: [],
  isLoading: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case setPizza: {
      return {
        ...state,
        items: action.payload,
      };
    }
    case loadingPizza: {
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

export default pizzas;
