import { applyMiddleware, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"
import { appReducer } from "./app/reducer"
import { userReducer } from "./user/reducer"

export const store = createStore(
	combineReducers({
		app: appReducer,
		user: userReducer,
	}),
	applyMiddleware(thunk)
)
