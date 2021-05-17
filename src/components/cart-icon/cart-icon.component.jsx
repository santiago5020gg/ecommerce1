import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartActionTypes } from "../../redux/cart/cart.types";
import { CartIconContainer, IconShop, ItemsCountContainer } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <IconShop className="shopping-icon" />
    <ItemsCountContainer>{itemCount}</ItemsCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () =>
    dispatch(toggleCartHidden(CartActionTypes.TOGGLE_CART_HIDDEN)),
});

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
