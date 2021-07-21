import React from "react"
import PropTypes from "prop-types"

export const AuthLayout = ({ children }) => {
	return <>{children}</>
}
AuthLayout.propTypes = {
	children: PropTypes.any,
}
