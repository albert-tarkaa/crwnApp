import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckOutItem from '../components/checkoutItem';
import { selectCartItems, selectCartItemsTotal } from '../redux/cart/cartSelectors';
import './checkout.styles.scss';

const CheckOut = ({ cartItems, cartItemsTotal }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.length ? (
      cartItems.map((cartItem) => <CheckOutItem cartItem={cartItem} key={cartItem.id} />)
    ) : (
      <span className='empty-message'>Cart is empty</span>
    )}
    <div className='total'>
      <span>TOTAL: $ {cartItemsTotal}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotal: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckOut);
