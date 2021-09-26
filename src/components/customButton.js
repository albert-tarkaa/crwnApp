import React from 'react';
import './custom-button.styles.scss';

const CustomButtom = ({ children, isGoogleSignIn, ...OtherProps }) => {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...OtherProps}>
      {children}
    </button>
  );
};

export default CustomButtom;
