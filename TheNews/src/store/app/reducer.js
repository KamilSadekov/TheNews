/* eslint-disable indent */
import { LOGIN, LOGOUT, UPDATE_LOADING_STATUS } from "./types"

const initialState = {
	authToken: null,
	appTheme: null,
	appLoading: false,
}

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case LOGIN:
			return { ...state, authToken: payload }
		case LOGOUT:
			return { ...state, authToken: null }
		case UPDATE_LOADING_STATUS:
			return { ...state, appLoading: payload }
		default:
			return state
	}
}
