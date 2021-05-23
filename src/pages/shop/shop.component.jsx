import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionsOverViewContainer from "../../components/collections-overview/collections-overview.container";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../category/collection.container";



class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component= {CollectionsOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionRouteName`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCollectionFeching: state.shop.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
