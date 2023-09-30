

const initialState = {
    products: [], 
    cart: [],
}
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Check if the product is already in the cart
        if (state.cart.find((item) => item.id === action.payload.id)) {
          return state;
        }
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      case 'RESET_CART':
        return {
          ...state,
          cart: [],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  