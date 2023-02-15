import { ADD_TO_CART, LOAD_PRODUCTS } from "../actionTypes/actionTypes";

const initialState = {
  products: [],
  cart: [],
  //   loading: false,
  //   error: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    // case LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //     error: false,
    //   };
    // case ERROR:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: true,
    //   };

    default:
      return state;
  }
};

export default productReducer;
