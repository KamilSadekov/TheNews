import { useEffect, useRef, useState } from "react"

export const useThrottle = (value, timeout) => {
	const [state, setState] = useState(value)
	const lastRan = useRef(Date.now())

	useEffect(() => {
		const handler = setTimeout(function () {
			if (Date.now() - lastRan.current >= timeout) {
				setState(value)
				lastRan.current = Date.now()
			}
		}, timeout - (Date.now() - lastRan.current))

		return () => clearTimeout(handler)
	}, [value, timeout])

	return state
}
