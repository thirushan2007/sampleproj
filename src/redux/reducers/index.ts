import { combineReducers } from "redux";
import currentUser from "./user";
import ProductInformation from "./product";

const rootReducer  = combineReducers({
    currentUser,
    ProductInformation
})

export default rootReducer;