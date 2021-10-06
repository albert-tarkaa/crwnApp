import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cartAction';
import './collection-item.styles.scss';
import CustomButtom from './customButton';

function CollectionItem({ item, addItem }) {
  const { name, imageUrl, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButtom inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButtom>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
