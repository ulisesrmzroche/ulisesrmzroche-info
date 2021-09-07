import React from "react"
import { ProfilePic, NavSocial, Bio, DisabledLink, NavLink } from "#components"
import styles from "./styles.module.css"

const InfoCardTitle = () => {
  return <h1 className="card-header-title">@ulisesrmzroche</h1>
}

const CardImage = (props) => {
  const { children } = props
  return (
    <div className="card-image">
      <figure className="image">{children}</figure>
    </div>
  )
}

const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>
}

const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>
}

const NavPanel = ({ children }) => {
  return <nav className="panel">{children}</nav>
}

const Card = (props) => {
  const { className, children } = props
  return <div className={`card ${className}`}>{children}</div>
}

export default function InfoCard() {
  return (
    <Card className={styles.InfoCard}>
      <CardHeader>
        <InfoCardTitle />
      </CardHeader>
      <CardImage>
        <ProfilePic />
      </CardImage>
      <CardContent>
        <Bio />
      </CardContent>
      <NavPanel>
        <NavLink
          className="panel-block"
          href="https://blog.ulisesrmzroche.me"
          text="#blog"
        />
        <NavLink
          className="panel-block"
          href="https://dev.ulisesrmzroche.me"
          text="#dev"
        />
        <DisabledLink className="panel-block" text="#wip" />
        <DisabledLink className="panel-block" text="#contact" />
      </NavPanel>
      <CardContent>
        <NavSocial />
      </CardContent>
    </Card>
  )
}
