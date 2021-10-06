import cartActionTypes from './cartActionTypes';

const INITIAL_STATE = {
  hidden: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DISPLAY:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default CartReducer;
