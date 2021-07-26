import { FILTER_ATTR_RESET, FILTER_UPDATE_ATTR } from "./types"

const initialState = {
    fillterAttr: {
        subject: "",
        tab: 1,
        status: "",
        month: "",
        type: "",
        experience: "",
    },
}

export const filterReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case FILTER_UPDATE_ATTR:
            return { ...state, fillterAttr: { ...state.fillterAttr, ...payload } }
        case FILTER_ATTR_RESET:
            return initialState
        default:
            return state
    }
}
