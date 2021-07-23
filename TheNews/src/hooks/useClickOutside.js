import { useEffect } from "react"

// кастомный хук для модалок или выпадающих списков , которые можно закрыть при клике вне модалки или списка )

export const useClickOutside = (ref, callback) => {
	const handleClick = e => {
		if (ref.current && !ref.current.contains(e.target)) {
			callback()
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleClick)
		return () => {
			document.removeEventListener("click", handleClick)
		}
	})
}
