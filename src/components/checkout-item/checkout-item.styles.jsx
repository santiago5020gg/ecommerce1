import styled, { css } from "styled-components";

const textInfoCheckStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const Imagecontainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextCheckContainer = styled.span`
  width: 23%;
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
`;

export const NameContainer = styled.span`
  ${textInfoCheckStyles}
`;

export const QuantityContainer = styled.span`
  display: flex;
  ${textInfoCheckStyles}
`;

export const ValueContainer = styled.span`
  margin: 0 10px;
  ${textInfoCheckStyles}
`;

export const PriceContainer = styled.span`
  margin: 0 10px;
  ${textInfoCheckStyles}
`;

export const RemoveButtonContainer = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
