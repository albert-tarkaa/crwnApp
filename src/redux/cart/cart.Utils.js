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


export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
  const existingCartItems = cartItems.find((cartItem) => cartItem.id === cartItemsToRemove.id);

  //if only item exists in cart, reomve/filter out item
  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemsToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};
