/* eslint-disable indent */
import { UPDATE_PROFILE } from "./types"

const initialState = {
	profile: {},
	editCity: null,
	coordinates: null,
}

export const userReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case UPDATE_PROFILE:
			return { ...state, profile: { ...state.profile, ...payload } }
		default:
			return state
	}
}
