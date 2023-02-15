import {
  ADD_TO_CART,
  LOAD_PRODUCTS,
  REMOVE_TO_CART,
} from "../actionTypes/actionTypes";

export const loadProduct = (products) => {
  return {
    type: LOAD_PRODUCTS,
    payload: products,
  };
};
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const removeToCart = (product) => {
  return {
    type: REMOVE_TO_CART,
    payload: product,
  };
};
// export const loading = () => {
//   return {
//     type: LOADING,
//   };
// };
// export const error = () => {
//   return {
//     type: ERROR,
//   };
// };
