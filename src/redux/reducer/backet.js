const initialState = {
    items: {},
    AllPrice: 0,
    AllItemsBacket: 0
}

const Backet = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id], action.payload]
                }
            }
        default:
            return state
    }
}


export default Backet;  