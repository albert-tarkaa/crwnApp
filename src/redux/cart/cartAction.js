import cartActionTypes from './cartActionTypes';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_DISPLAY,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
