const initialState = {
    items: [],
    isRender: false
}

const product = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                ...state,
                items: action.payload,
                isRender: true
            }

        case "SET_RENDER":
            return {
                ...state,
                isRender: action.payload
            }

        default:
            return state
    }
}


export default product;  