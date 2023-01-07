import React from 'react';

import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, mealItemPrice }) => {
  const price = `$${mealItemPrice.toFixed(2)}`;
  return (
    <li id={id} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
