const initialState = {
    items: {},
    AllPrice: 0,
    AllItemsBacket: 0
}

const sumPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const Backet = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            const payloadProductItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: payloadProductItems,
                    AllPrice: sumPrice(payloadProductItems)
                }
            }

            const items = Object.values(newItems).map(obj => obj.items);
            const AllProducts = [].concat.apply([], items)
            const AllPrice = sumPrice(AllProducts)

            return {
                ...state,
                items: newItems,
                AllItemsBacket: AllProducts.length,
                AllPrice
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

        default:
            return state
    }
}


export default Backet;  