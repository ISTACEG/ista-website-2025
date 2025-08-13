import React from "react"

export function Button({ children, className = "", size = "default", asChild = false, ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const sizeClasses = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${classes}`.trim(),
      ...props,
    })
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
