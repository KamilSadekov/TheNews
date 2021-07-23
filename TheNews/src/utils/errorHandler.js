import {appLogout} from "../store/app/actions"
import { store } from "../store"

export const errorHandler = ({ errorText, viewAlert = true }) => {
	const IS_NOT_AUTH = errorText.match(/401/)

	let errText = null

	if (IS_NOT_AUTH) {
		store.dispatch(appLogout())
	} else if (errorText.match(/timeout/gi)) {
		errText = "Превышено время ответа от сервера. Перезагрузите приложение."
	} else if (errorText.match(/network/gi)) {
		errText = "Отсутствует интернет соединение."
	} else if (errorText.match(/404/g)) {
		errText = "Ошибка сервера: #404"
	}

	if (viewAlert && !IS_NOT_AUTH) {
		alert(`Ошибка ${errText || errorText}`)
	}
}
