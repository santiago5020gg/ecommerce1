import React from "react";
import { Route } from "react-router";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../category/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewComponent}
      />
      <Route path={`${match.path}/:collectionRouteName`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
