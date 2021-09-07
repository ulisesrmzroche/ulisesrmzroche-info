import React from "react"

const DisabledLink = ({ text, children, className }) => {
  if (!text && !children)
    throw new Error("Requires a text or children prop to work")
  return (
    <a
      className={className}
      style={{ cursor: "not-allowed", color: "#aaa" }}
      href="#"
      onClick={(e) => {
        e.preventDefault()
      }}
    >
      {text || children}
    </a>
  )
}

export default DisabledLink
