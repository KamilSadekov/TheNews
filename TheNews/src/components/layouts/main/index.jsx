import React from "react"
import PropTypes from "prop-types"
import {Header} from "../../common/header";

export const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
				{children}
			{/*место для футтера*/}
			</>
	)

	// а тут mainLayout для меню и футера тк подобное есть на всех экранах
}
MainLayout.propTypes = {
	children: PropTypes.any,
}
