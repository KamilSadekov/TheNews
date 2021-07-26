import { applyMiddleware, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"
import { appReducer } from "./app/reducer"
import { userReducer } from "./user/reducer"
import {filterReducer} from "./filter/reducer";

export const store = createStore(
	combineReducers({
		app: appReducer,
		user: userReducer,
		filter: filterReducer,
	}),
	applyMiddleware(thunk)
)
