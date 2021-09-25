import React, { Component } from 'react';
import CollectionPreview from '../components/collection-preview';
import SHOP_DATA from '../shop.data';

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...OtherProps }) => (
          <CollectionPreview key={id} {...OtherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
