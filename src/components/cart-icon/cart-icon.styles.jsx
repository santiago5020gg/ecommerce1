import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const IconShop = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

export const ItemsCountContainer = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
