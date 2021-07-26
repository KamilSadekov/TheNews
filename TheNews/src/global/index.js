// глобальные перменные разбитые по файлам (типам)

import {store} from "../store";
import {fillterAttrUpdate} from "../store/filter/actions";


export const BASE_URL = "https://api.example.ru/api"

export const handlePickerChange = (type, value, callback = null) => {
    const { fillterAttr } = store.getState().filter

    if (typeof fillterAttr[type] !== "object") {
        const paramType = {}
        paramType[type] = value
        store.dispatch(fillterAttrUpdate(paramType))

        if (callback) {
            callback()
        }
    }
}
