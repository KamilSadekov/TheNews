import cx from "classnames"
import PropTypes from "prop-types"
import React from "react"

export const Input = ({fieldClass, groupText = null, groupTextAlign = "left", groupTextClick = null, label, error, name, register, thumbText, ...props}) => {
    const onClick = () => {
        if (groupTextClick) groupTextClick()
    }

    return (
        <label className={cx(fieldClass, "form-field block")}>
            {label && <div className="label cursor-pointer mb-1">{label}</div>}

            <span className="input-group flex ">
				{groupText && groupTextAlign === "left" && (
                    <span
                        className={cx(
                            "group-prepend flex items-center justify-center _left",
                            {
                                "cursor-pointer": groupTextClick,
                            }
                        )}
                        onClick={onClick}
                    >
						{groupText}
					</span>
                )}

                <input className="input w-full" {...register(name)} {...props} />

                {groupText && groupTextAlign === "right" && (
                    <span
                        className={cx(
                            "group-prepend flex items-center justify-center _right",
                            {
                                "cursor-pointer": groupTextClick,
                            }
                        )}
                        onClick={onClick}
                    >
						{groupText}
					</span>
                )}
			</span>

            {thumbText && <div className="thumb mt-1">{thumbText}</div>}

            {error && <div className="error mt-1">{error}</div>}
        </label>
    )
}
Input.propTypes = {
    groupText: PropTypes.any,
    groupTextAlign: PropTypes.string,
    fieldClass: PropTypes.any,
    register: PropTypes.any,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    thumbText: PropTypes.string,
    groupTextClick: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
}
