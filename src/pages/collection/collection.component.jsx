import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const Collection = ({ collection }) => {
    console.log(collection);

    return (
        <div className="category">
            <h2>COLLECTION PAGE</h2>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(Collection);
