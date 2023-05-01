import React from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { CartContext } from "./context.js";
import { useContext } from "react";

const Item = (props) => {
  const { deleteItem } = useContext(CartContext);
  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => deleteItem(props)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
