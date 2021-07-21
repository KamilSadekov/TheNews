import React from "react"
import PropTypes from "prop-types"

export const MainLayout = ({ children }) => {
	return <>{children}</>
}
MainLayout.propTypes = {
	children: PropTypes.any,
}
