import React from 'react';
import { Button } from '@material-ui/core';

const Item = (props) => {

  const price = `$${props.price.toFixed(2)}`;

  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <Button variant="contained">Temp</Button>
      </div>
    </div>
  );
};

export default Item;