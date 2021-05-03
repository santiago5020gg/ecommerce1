import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../components/preview-collection/collection-preview";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    collections: state.shop.collections,
  };
};

export default connect(mapStateToProps)(ShopPage);
