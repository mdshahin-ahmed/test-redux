const initialState = {
  product: [],
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "value":
      return "";

    default:
      return state;
  }
};

export default productReducer;
