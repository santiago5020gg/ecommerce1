import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../../components/with-sprinner/with-sprinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = (state) => {
  return {
    isLoading: state.shop.isFetching,
  };
};

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);


export default CollectionPageContainer;