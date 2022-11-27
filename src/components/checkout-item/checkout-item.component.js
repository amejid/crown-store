/* eslint-disable */
import {CheckoutItemContainer, ImageContainer, Arrow, Quantity, Value, RemoveButton, NamePrice} from './checkout-item.styles';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const {
    name, imageUrl, price, quantity,
  } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NamePrice>{name}</NamePrice>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <NamePrice>{price}</NamePrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
