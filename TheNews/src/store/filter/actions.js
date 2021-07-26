import {FILTER_ATTR_RESET, FILTER_UPDATE_ATTR} from "./types";


export const fillterAttrUpdate = filterParams => {
    return async dispatch => {
        dispatch({
            type: FILTER_UPDATE_ATTR,
            payload: filterParams,
        })
    }
}

export const fillterAttrReset = () => {
    return async dispatch => {
        dispatch({
            type: FILTER_ATTR_RESET,
        })
    }
}

