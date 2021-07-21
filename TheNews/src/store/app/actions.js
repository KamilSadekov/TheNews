import { LOGIN, LOGOUT, UPDATE_LOADING_STATUS } from "./types"

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
