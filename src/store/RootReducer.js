import cartReducer from "./reducers/CartReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    cart :cartReducer
})

export default rootReducer;