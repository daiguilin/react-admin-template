import {createStore,combineReducers} from "redux"
import handleNum from "./numStatus/reducer"
import handleArrStatus from "./ArrStatus/reducer"

const reducers = combineReducers({
    handleNum,
    handleArrStatus
})
const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store