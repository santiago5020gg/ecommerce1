import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../with-sprinner/with-sprinner.component";
import collectionsOverviewComponent from "./collections-overview.component";

const mapStateToProps = (state) => {
  return {
    isLoading: state.shop.isFetching,
  };
};

export const CollectionsOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionsOverviewComponent);


export default CollectionsOverViewContainer;