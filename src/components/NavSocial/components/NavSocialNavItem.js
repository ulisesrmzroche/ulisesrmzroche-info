import React from "react"
import Icon from "#components/Icon"

const NavSocialNavItem = ({ name, href }) => {
  return (
    <a href={href} className="nav-social-nav-item">
      <Icon name={name} />
    </a>
  )
}

export default NavSocialNavItem
