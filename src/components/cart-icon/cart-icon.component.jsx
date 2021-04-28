import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartActionTypes } from "../../redux/cart/cart.types";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () =>
    dispatch(toggleCartHidden(CartActionTypes.TOGGLE_CART_HIDDEN)),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
