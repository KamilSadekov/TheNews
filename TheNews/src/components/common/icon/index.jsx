import React from "react"
import PropTypes from "prop-types"
import { iconList } from "./iconList"

export const Icon = ({ size = 16, color = "#000", name, ...props }) => {
	if (iconList[name]) return null

	const { viewBox, data } = iconList[name]

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewBox || "0 0 512 512"}
			height={size}
			width={size}
			fill={color}
			{...props}
		>
			{data}
		</svg>
	)
}
Icon.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
	name: PropTypes.string.isRequired,
}
