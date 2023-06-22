// cartReducer.js

const initialState = {
    items: [],
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            if (state.items.find((item) => item.id === action.payload.id)) {
                // If item already exists, increase the count by 1
                const updatedItems = state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            count: item.count + 1,
                        };
                    }
                    return item;
                });

                return {
                    ...state,
                    items: updatedItems,
                    totalPrice: state.totalPrice + action.payload.price,
                };
            } else {
                // If item doesn't exist, add it with a count of 1
                const newItem = {
                    ...action.payload,
                    count: 1,
                };

                return {
                    ...state,
                    items: [...state.items, newItem],
                    totalPrice: state.totalPrice + action.payload.price,
                };
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items
                    .map((item) => {
                        if (item.id === action.payload.id) {
                            if (item.count > 1) {
                                // Decrease the quantity by 1
                                return {
                                    ...item,
                                    count: item.count - 1,
                                };
                            }
                            // Remove the item from the cart
                            return null;
                        }
                        return item;
                    })
                    .filter((item) => item !== null),
                totalPrice:
                    state.totalPrice -
                    state.items.find((item) => item.id === action.payload.id)
                        .price,
            };

        case "CLEAR_CART":
            // Clear the cart
            return {
                ...state,
                items: [],
                totalPrice: 0,
            };

        default:
            return state;
    }
};

export default cartReducer;
