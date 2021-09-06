import React from "react"
import { Icon } from "@/components"
import styles from "./index.module.css"

const SOCIAL_NETWORKS = [
  { name: "facebook", href: "https://www.facebook.com/UlisesRamirezRoche" },
  { name: "twitter", href: "https://www.twitter.com/ulisesrmzroche" },
  { name: "github", href: "https://www.github.com/ulisesrmzroche" },
  { name: "linkedin", href: "https://www.linkedin.com/in/ulisesrmzroche" },
]

const NavSocialNavItem = ({ name, href }) => {
  return (
    <a href={href} className="nav-social-nav-item">
      <Icon name={name} />
    </a>
  )
}

export default function NavSocial() {
  return (
    <nav className={styles.NavSocial}>
      {SOCIAL_NETWORKS.map((network) => {
        return (
          <span key={network.href}>
            <NavSocialNavItem name={network.name} href={network.href} />
          </span>
        )
      })}
    </nav>
  )
}
