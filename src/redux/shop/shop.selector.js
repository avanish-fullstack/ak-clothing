import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShoppingData = createSelector([selectShop], (shop) => shop);

export const selectCollection = (collectionUrlParam) =>
    createSelector(
        [selectShoppingData],
        (collections) => collections[collectionUrlParam]
    );

export const selectCollectionsFromPreview = createSelector(
    [selectShoppingData],
    (collections) => Object.keys(collections).map((key) => collections[key])
);
