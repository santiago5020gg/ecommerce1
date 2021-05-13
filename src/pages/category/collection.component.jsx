import React from "react";
import { connect } from "react-redux";
import  CollectionItem  from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";


const getCollectionByRoute = (state, collectionProps) => {
  const collectionItem = state.shop.collections[collectionProps.match.params.collectionRouteName];
  console.log('aqui ',collectionProps.match.params.collectionRouteName);
  return collectionItem;
};

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item} /> )
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: getCollectionByRoute(state, ownProps),
  };
};

export default connect(mapStateToProps)(CollectionPage);
