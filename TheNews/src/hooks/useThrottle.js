import { useEffect, useRef, useState } from "react"


//хук для улучшения производительности, хук предотвращает запуск функции, если она уже запускалась недавно.
// Троттлинг также обеспечивает регулярность выполнение функции с заданной периодичностью.

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
