import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import { convertCollectionsSnapShotToMap, firestore } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../category/collection.component";

class ShopPage extends React.Component  {
  unsubscribeFromSnapShot = null;
  componentDidMount(){
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
     const collectionsMap =  convertCollectionsSnapShotToMap(snapshot);
     updateCollections(collectionsMap);
    });
  }
  render() {
    const  { match } = this.props;
    return(
      <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewComponent}
      />
      <Route path={`${match.path}/:collectionRouteName`} component={CollectionPage} />
    </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
