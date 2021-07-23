import React from "react"
import PropTypes from "prop-types"

export const AuthLayout = ({ children }) => {
	return <>{children}</>

	// не прям так сильно сидел над дизайном , но предусмотрел то , что оборачиваю в лэйаут если , например , экраны авторизации имеют одинаковый фон или дизайн
}
AuthLayout.propTypes = {
	children: PropTypes.any,
}
