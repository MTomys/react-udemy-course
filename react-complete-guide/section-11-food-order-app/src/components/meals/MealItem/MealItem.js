import React from 'react';
import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, mealItemPrice }) => {
  const cartCtx = useContext(CartContext);

  const price = `$${mealItemPrice.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: mealItemPrice,
    });
  };

  return (
    <li id={id} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
