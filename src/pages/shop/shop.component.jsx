import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import collectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-sprinner/with-sprinner.component";
import {
  convertCollectionsSnapShotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../category/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(
  CollectionsOverviewComponent
);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  unsubscribeFromSnapShot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-1a048/databases/(default)/documents/collections"
    // )
    //   .then((response) => response.json())
    //   .then((collections) => console.log(collections));

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionRouteName`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
