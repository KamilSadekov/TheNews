import PropTypes from "prop-types"
import React, { forwardRef } from "react"
import "./index.scss"

export const Button = forwardRef(
    (
        { size = null, color = null, className = null, children, ...props },
        ref
    ) => {
        let cls = "btn"

        if (size) {
            cls += ` btn-size-${size}`
        }

        if (color) {
            cls += ` btn-${color}`
        }

        if (className) {
            cls += ` ${className}`
        }

        return (
            <button ref={ref} className={cls} {...props}>
                {children}
            </button>
        )
    }
)
Button.propTypes = {
    size: PropTypes.any,
    color: PropTypes.any,
    children: PropTypes.any,
    onClick: PropTypes.func,
    className: PropTypes.any,
}

Button.displayName = "Button"
