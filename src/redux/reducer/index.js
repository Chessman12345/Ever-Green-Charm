import { combineReducers } from 'redux'
import filterReducer from "./filter"
import productReducer from "./product"
import backetReducer from "./backet"

const rootReducers = combineReducers({
    filter: filterReducer,
    product: productReducer,
    backet: backetReducer
})

export default rootReducers;