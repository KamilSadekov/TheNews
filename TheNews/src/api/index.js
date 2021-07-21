import axios from "axios"
import { store } from "../store"
import { updateLoadingStatus } from "../store/app/actions"
import { errorHandler } from "../utils/errorHandler"

export const Api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 10000,
})

Api.interceptors.request.use(function (config) {
	const { authToken } = store.getState().app

	if (config.headers["AppLoading"]) {
		store.dispatch(updateLoadingStatus(true))
	}

	if (authToken) {
		config.headers.common.Authorization = `Bearer ${authToken}`
	}

	return config
})

Api.interceptors.response.use(
	function (response) {
		const { appLoading } = store.getState().app

		if (appLoading) {
			store.dispatch(updateLoadingStatus(false))
		}

		return response
	},
	error => {
		errorHandler({
			errorText: error.message,
		})

		return Promise.reject(error)
	}
)

export const apiPost = async ({ url, postData = null, headerList = {} }) => {
	const res = await Api.post(url, postData, { headers: headerList })

	return res.data
}

export const apiGet = async ({ url, headerList = {} }) => {
	const res = await Api.get(url, { headers: headerList })

	return res.data
}
