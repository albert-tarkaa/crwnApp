import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButtom from './customButton';

const CartDropDown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-item' />
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

export default CartDropDown;
