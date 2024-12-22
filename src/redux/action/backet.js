export const addProduct = (obj) => ({
    type: 'ADD_PRODUCT',
    payload: obj
})

export const clearProduct = () => ({
    type: 'CLEAR_PRODUCT',
})

export const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    payload: id
})