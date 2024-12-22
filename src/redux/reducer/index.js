import { combineReducers } from 'redux'
import filterReducer from "./filter"
import productReducer from "./product"

const rootReducers = combineReducers({
    filter: filterReducer,
    product: productReducer
})

export default rootReducers;