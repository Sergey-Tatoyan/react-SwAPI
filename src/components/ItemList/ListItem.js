import React from 'react';
import { ListGroup } from 'react-bootstrap';

import './ListItem.css';

const ListItem = ({ items,itemId, getItemId, children }) => {

  const content = items.map((el) => {
    const activeItem = (Number(itemId) === Number(el.id)) ? 'dark active' : 'dark';
    return (
      <ListGroup.Item
        onClick={ () => getItemId(el.id) }
        variant={activeItem}
        action
        key={ el.id }
      >
        { children(el) }
      </ListGroup.Item>
    )
  });

  return (
    <ListGroup>
      { content }
    </ListGroup>
  );
};



export default ListItem;
