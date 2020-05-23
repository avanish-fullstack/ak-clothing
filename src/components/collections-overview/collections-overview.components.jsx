import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsFromPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collection }) => {
    console.log(collection);

    return collection.map((item) => (
        <CollectionPreview key={item.id} {...item} />
    ));
};

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsFromPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
