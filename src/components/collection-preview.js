import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from './collectionItem';

export default function CollectionPreview({ id, items, title }) {
  return (
    <div className='collection-preview'>
      <div className='title'>{title.toUpperCase()}</div>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
