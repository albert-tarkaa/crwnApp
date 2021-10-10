import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.util';
import { connect } from 'react-redux';
import ShoppingIcon from './cart-icon';
import CartDropDown from './cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../redux/cart/cartSelectors';
import { selectCurrentUser } from '../redux/user/userSelectors';

function Header({ currentUser, hidden }) {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>

        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <ShoppingIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});


export default connect(mapStateToProps)(Header);
