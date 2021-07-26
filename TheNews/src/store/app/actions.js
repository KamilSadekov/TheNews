import { LOGIN, LOGOUT, UPDATE_LOADING_STATUS, FILTER_ATTR_RESET, FILTER_UPDATE_ATTR } from "./types"

export const appLogin = authToken => {
	return dispatch => {
		localStorage.setItem("authToken", authToken)

		dispatch({
			type: LOGIN,
			payload: authToken,
		})
	}
}

export const appLogout = () => {
	return dispatch => {
		localStorage.clear()

		dispatch({
			type: LOGOUT,
			payload: null,
		})
	}
}

export const updateLoadingStatus = status => {
	return {
		type: UPDATE_LOADING_STATUS,
		payload: status,
	}
}
