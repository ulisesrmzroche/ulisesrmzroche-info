import PropTypes from "prop-types"
import React from "react"

const NavLink = (props) => {
  const { children, href, className, text } = props
  if (!children && !text) throw new Error("Requires children or text")
  return (
    <a href={href} className={props.className}>
      {text || children}
    </a>
  )
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.object,
  className: PropTypes.string,
  text: PropTypes.string,
}

NavLink.defaultProps = {
  className: "nav-link",
}

export default NavLink
