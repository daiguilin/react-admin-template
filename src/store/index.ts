import {createStore,combineReducers,compose,applyMiddleware} from "redux"
import handleNum from "./numStatus/reducer"
import handleArrStatus from "./ArrStatus/reducer"
import reduxThunk from "redux-thunk"
const reducers = combineReducers({
    handleNum,
    handleArrStatus
})
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store