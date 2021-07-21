import { useEffect, useState } from "react"
import { apiGet } from "../api"
import { errorHandler } from "../utils/errorHandler"

export const useFetch = ({
	url = null,
	defaultValue = null,
	headerList = {},
}) => {
	let mounted = true

	const [loading, setLoading] = useState(true)
	const [response, setResponse] = useState(defaultValue)

	const fetchData = async () => {
		try {
			const res = await apiGet({ url, headerList })

			if (res && !res?.error) {
				if (mounted) {
					setResponse(res.data)
				}
			}
		} catch (e) {
			errorHandler({ errorText: e.message })
		} finally {
			if (mounted) setLoading(false)
		}
	}

	useEffect(() => {
		setLoading(true)

		fetchData()

		return () => {
			mounted = false
		}
	}, [url])

	return { response, loading, fetchData, setResponse }
}
