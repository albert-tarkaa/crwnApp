import React from 'react';
import './custom-button.styles.scss';

const CustomButtom = ({ children, ...OtherProps }) => {
  return (
    <button className='custom-button' {...OtherProps}>
      {children}
    </button>
  );
};

export default CustomButtom;
