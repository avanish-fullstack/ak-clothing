const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (item) => item.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((item) =>
            item.id === cartItemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartitem) => cartitem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartitem) => cartitem.id !== cartItemToRemove.id
        );
    }

    return cartItems.map((cartitem) =>
        cartitem.id === cartItemToRemove.id
            ? { ...cartitem, quantity: cartitem.quantity - 1 }
            : cartitem
    );
};

export { addItemToCart, removeItemFromCart };
