import React, { Component } from "react";
import SHOP_DATA from "../../data/shop_data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        return this.state.collections.map((item) => (
            <CollectionPreview key={item.id} {...item} />
        ));
    }
}

export default ShopPage;
