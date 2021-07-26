import cx from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./index.module.scss"

export const Select = ({
	fieldClass,
	label,
	error,
	register,
	list,
	thumbText,
	...props
}) => {
	const renderOption = ({ value, label }) => {
		return (
			<option key={value} value={value}>
				{label}
			</option>
		)
	}

	return (
		<label className={cx(styles.field, fieldClass, "block")}>
			{label && (
				<div className={cx(styles.label, "cursor-pointer mb-1")}>{label}</div>
			)}

			<select
				className={cx(styles.select, "w-full")}
				{...props}
			>
				{list.map(renderOption)}
			</select>

			{thumbText && <div className={cx(styles.thumb, "mt-1")}>{thumbText}</div>}

			{error && <div className={cx(styles.error, "mt-1")}>{error}</div>}
		</label>
	)
}
Select.propTypes = {
	fieldClass: PropTypes.any,
	register: PropTypes.any,
	label: PropTypes.string,
	error: PropTypes.string,
	list: PropTypes.array.isRequired,
	thumbText: PropTypes.string,
}
