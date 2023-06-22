// cartActions.js

// Action to add an item to the cart
export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item,
    };
};

// Action to remove an item from the cart
export const removeFromCart = (item) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: item,
    };
};

// Action to clear the cart
export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    };
};
