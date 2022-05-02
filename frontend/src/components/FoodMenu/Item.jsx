import React from 'react';
import { Button } from '@material-ui/core';
import { useContext } from 'react';


const Item = (props) => {

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <Button>Temp</Button>
      </div>
    </li>
  );
};

export default Item;