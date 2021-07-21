import AsyncStorage from "@react-native-community/async-storage"
import { UPDATE_PROFILE } from "./types"

export const updateProfile = userData => {
	return async dispatch => {
		await AsyncStorage.setItem("userData", JSON.stringify(userData))

		dispatch({
			type: UPDATE_PROFILE,
			payload: userData,
		})
	}
}
