import { UPDATE_PROFILE } from "./types"

export const updateProfile = userData => {
	return async dispatch => {
		await localStorage.setItem("userData", JSON.stringify(userData))

		dispatch({
			type: UPDATE_PROFILE,
			payload: userData,
		})
	}
}
