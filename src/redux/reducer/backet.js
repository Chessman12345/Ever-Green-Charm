const initialState = {
    items: {},
    AllPrice: 0,
    AllItemsBacket: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

const Backet = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT": {
            const payloadProductItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: payloadProductItems,
                    AllPrice: getTotalPrice(payloadProductItems)
                }
            }

            const AllItemsBacket = getTotalSum(newItems, "items.length")
            const AllPrice = getTotalSum(newItems, "AllPrice")

            return {
                ...state,
                items: newItems,
                AllItemsBacket,
                AllPrice
            }
        }

        case "CLEAR_PRODUCT":
            return {
                AllPrice: 0,
                AllItemsBacket: 0,
                items: {}
            };

        case 'REMOVE_PRODUCT':
            const remItems = {
                ...state.items,
            }
            const currentAllPrice = remItems[action.payload].AllPrice
            const currentAllCount = remItems[action.payload].items.length

            delete remItems[action.payload];
            return {
                ...state,
                items: remItems,
                AllPrice: state.AllPrice - currentAllPrice,
                AllItemsBacket: state.AllItemsBacket - currentAllCount
            }

        case "INC_PRODUCT": {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    AllPrice: getTotalPrice(newObjItems)
                }
            }
            const AllPrice = getTotalSum(newItems, "AllPrice")
            const AllItemsBacket = getTotalSum(newItems, "items.length")
            return {
                ...state,
                items: newItems,
                AllPrice,
                AllItemsBacket
            };
        }

        case "DEC_PRODUCT": {
            const currentArrProduct = state.items[action.payload].items;
            const newObjItems = currentArrProduct.length > 1 ? [...state.items[action.payload].items].slice(1) : currentArrProduct

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    AllPrice: getTotalPrice(newObjItems)
                }
            }

            const AllPrice = getTotalSum(newItems, "AllPrice")
            const AllItemsBacket = getTotalSum(newItems, "items.length")
            return {
                ...state,
                items: newItems,
                AllPrice,
                AllItemsBacket
            }
        };


        default:
            return state;
    }
}



export default Backet;  