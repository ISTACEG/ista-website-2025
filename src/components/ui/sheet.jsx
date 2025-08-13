"use client"

import React, { createContext, useContext, useEffect } from "react"

const SheetContext = createContext()

export function Sheet({ children, open, onOpenChange }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false)
      }
    }

    if (open) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [open, onOpenChange])

  return <SheetContext.Provider value={{ open, onOpenChange }}>{children}</SheetContext.Provider>
}

export function SheetTrigger({ children, asChild, ...props }) {
  const { onOpenChange } = useContext(SheetContext)

  if (asChild) {
    return React.cloneElement(children, {
      ...props,
      onClick: () => onOpenChange(true),
    })
  }

  return (
    <button {...props} onClick={() => onOpenChange(true)}>
      {children}
    </button>
  )
}

export function SheetContent({ children, side = "right", className = "", ...props }) {
  const { open, onOpenChange } = useContext(SheetContext)

  if (!open) return null

  const sideClasses = {
    right: "right-0 top-0 h-full w-80 translate-x-0",
    left: "left-0 top-0 h-full w-80 -translate-x-0",
    top: "top-0 left-0 w-full h-80 -translate-y-0",
    bottom: "bottom-0 left-0 w-full h-80 translate-y-0",
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => onOpenChange(false)} />

      {/* Sheet */}
      <div
        className={`fixed z-50 ${sideClasses[side]} border shadow-lg transition-transform duration-300 ease-in-out ${className}`}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

export function SheetHeader({ children, className = "", ...props }) {
  return (
    <div className={`flex flex-col space-y-2 text-center sm:text-left ${className}`} {...props}>
      {children}
    </div>
  )
}

export function SheetTitle({ children, className = "", ...props }) {
  return (
    <h2 className={`text-lg font-semibold ${className}`} {...props}>
      {children}
    </h2>
  )
}
