import React from "react"
import PropTypes from "prop-types"

export const MainLayout = ({ children }) => {
	return <>{children}</>

	// а тут mainLayout для меню и футера тк подобное есть на всех экранах
}
MainLayout.propTypes = {
	children: PropTypes.any,
}
