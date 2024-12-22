import axios from "axios";

export const setRender = (payload) => ({
    type: 'SET_RENDER',
    payload,
})

export const requestProduct = (sortBy, category) => (dispatch) => {
    axios.get(`http://localhost:3001/Products?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then(({ data }) => {
        dispatch(setProduct(data))
    });
    dispatch(setRender(false))
}

export const setProduct = (items) => ({
    type: 'SET_PRODUCT',
    payload: items
})