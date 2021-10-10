import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/cart/cartSelectors';
import './cart-dropdown.styles.scss';
import CartItem from './cart-item';
import CustomButtom from './customButton';

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))}
      </div>
      <CustomButtom>GO TO CHECKOUT</CustomButtom>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropDown);
