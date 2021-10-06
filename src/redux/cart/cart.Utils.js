export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItems = cartItems.find((cartItem) => cartItem.id === cartItemsToAdd.id);

  //if item exists in cart, increase quantitiy
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  //if not existing, the block above won't run, quantitiy is set to 1 and new cartitem is added to existing items
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
