import React from "react";
import {
  CartItemContainer,
  ImgCartDropDown,
  NameContainer,
  ItemDetailsContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImgCartDropDown src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <NameContainer>
        {quantity} x ${price}
      </NameContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
